function fn() {
    karate.log('executing karate-config-demo...');
    karate.log('karate.env system property set to ' + karate.env);
    const configYaml = karate.read('classpath:application-demo.yml');

    let replacePlaceholders = karate.read('classpath:js/replace.js');

    let config = {
        database: {
            jdbcUrl: configYaml.application.datasource.jdbcUrl
        },
        configuration: {
            yamlConfiguration: configYaml
        },
        functions: {
            replacePlaceholders: replacePlaceholders
        }
    };

    // karate.log('config before calling javascript with String: INSERT ${services.database.port}');
    let result = replacePlaceholders('INSERT ${services.database.port}', configYaml);
    // karate.log('config after calling javascript with String: ' + result);

    // karate.log('config before calling javascript: ' + (JSON.stringify(config)));
    config = replacePlaceholders(config, configYaml);
    // karate.log('javascript result type is ' + (typeof config));
    // karate.log('config after calling javascript: ' + config);
    // karate.log('config after calling javascript: ' + (JSON.stringify(config)));

    return config;
}