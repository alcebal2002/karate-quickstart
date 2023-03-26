function fn(inputData, yamlData) {
    // if (typeof inputData === 'string') {
    //     console.log('inputData is a String: ' + inputData);
    // } else if (typeof inputData === 'object') {
    //     console.log('inputData is an Object: ' + JSON.stringify(inputData));
    // } else {
    //     console.log('input type is unknown');
    // }
    // console.log('yamlData parameter: ' + JSON.stringify(yamlData));

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

    let replaceRecursiveFunction = function f(inputData, yamlData) {
        if (typeof inputData === 'object') {
            if (Array.isArray(inputData)) {
                return inputData.map((item) => f(item, yamlData));
            } else {
                const newData = {};
                for (const key in inputData) {
                    if (Object.prototype.hasOwnProperty.call(inputData, key)) {
                        newData[key] = f(inputData[key], yamlData);
                    }
                }
                return newData;
            }
        } else if (typeof inputData === 'string') {
            return replacePlaceholdersInString(inputData, yamlData);
        } else {
            return inputData;
        }
    }

    let result = replaceRecursiveFunction(inputData, yamlData);
    // console.log('result type is ' + (typeof result));
    // console.log('javascript result: ' + ((typeof result === 'object') ? JSON.stringify(result) : result));
    
    return result;
}