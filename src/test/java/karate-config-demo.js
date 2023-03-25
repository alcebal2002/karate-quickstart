function fn() {
    karate.log('executing karate-config-demo...');
    karate.log('karate.env system property set to ' + karate.env);
    const configYaml = karate.read('classpath:application-demo.yml');

    let config = {
        database: {
            jdbcUrl: configYaml.application.datasource.jdbcUrl
        }
    };

    let replacePlaceholders = karate.read('classpath:js/replace.js');
    config = JSON.parse(replacePlaceholders(JSON.stringify(config), JSON.stringify(configYaml)));

    karate.log('Final config: ' + JSON.stringify(config));

    return config;
}