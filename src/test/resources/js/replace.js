function fn(jsonData, yamlData) {
    console.log('jsonData: ' + jsonData);
    console.log('yamlData: ' + yamlData);

    let isJson = false;

    let getValueByDotNotation = function (obj, key) {
        const keys = key.split('.');
        let result = obj;
        for (const k of keys) {
            result = result[k];
            if (result === undefined) {
                return undefined;
            }
        }
        return result;
    }

    let replacePlaceholdersInString = function (str, yamlString) {
        return str.replace(/\${([^{}]+)}/g, (_, match) => {
            const value = getValueByDotNotation(yamlString, match.trim())
            return value !== undefined ? value : `$\{${match}}`;
        });
    }

    let replaceRecursiveFunction = function f(jsonData, yamlData) {
        if (typeof jsonData === 'object') {
            if (Array.isArray(jsonData)) {
                return jsonData.map((item) => f(item, yamlData));
            } else {
                const newData = {};
                for (const key in jsonData) {
                    if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
                        newData[key] = f(jsonData[key], yamlData);
                    }
                }
                return newData;
            }
        } else if (typeof jsonData === 'string') {
            return replacePlaceholdersInString(jsonData, yamlData);
        } else {
            return jsonData;
        }
    }

    let getStringValue = function (inputString) {
        let result = inputString;
        try {
            result = JSON.parse(inputString);
            console.log('Input parsed as Json: ' + JSON.stringify(result));
            isJson = true;
        } catch (e) {
            console.log('Unable to parse input as Json. Assuming String');
        }
        return result;
    }

    let result = replaceRecursiveFunction(getStringValue(jsonData), JSON.parse(yamlData));
    return isJson ? JSON.stringify(result) : result;

}