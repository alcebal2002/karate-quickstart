function fn() {
    karate.log('executing karate-config-demo...');
    karate.log('karate.env system property set to ' + karate.env);
    const configYaml = karate.read('classpath:application-demo.yml');
    let config = {
        database: {
            jdbcUrl: configYaml.application.datasource.jdbcUrl
        },
        configuration: {
            yamlConfiguration: configYaml
        }
    };

    karate.log('config replaced: ' + karate.pretty(replacePlaceholders(config,configYaml)));
    return replacePlaceholders(config,configYaml);
}