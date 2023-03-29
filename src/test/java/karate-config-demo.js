function fn() {
    karate.log('executing karate-config-demo...');
    karate.log('karate.env system property set to ' + karate.env);
    const configYaml = karate.read('classpath:application-demo.yml');
    let replacePlaceholdersFunction = karate.read('classpath:js/replace.js');
    let config = {
        database: {
            jdbcUrl: configYaml.application.datasource.jdbcUrl
        },
        configuration: {
            yamlConfiguration: configYaml
        },
        functions: {
            replacePlaceholders: replacePlaceholdersFunction
        }
    };

    // karate.log('config before calling javascript with String: INSERT ${services.database.port}');
    // karate.log('config after calling javascript with String: ' + result);
    // karate.log('config before calling javascript: ' + (JSON.stringify(config)));
    // karate.log('before config: ' + config);
    // karate.log('before config stringify: ' + JSON.stringify(config));
    // config = replacePlaceholdersFunction(config, configYaml);
    // karate.log('config: ' + config);
    // karate.log('config stringify: ' + JSON.stringify(config));
    // karate.log('javascript result type is ' + (typeof config));
    // karate.log('config after calling javascript: ' + config);
    // karate.log('config after calling javascript: ' + (JSON.stringify(config)));

    return config;
}