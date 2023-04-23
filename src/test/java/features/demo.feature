@demos
Feature: Demo Test

    Background: background setup
        * print 'background setup'
        * print 'baseUrl: ' + baseUrl
        # afterScenario and afterFeature hooks can be set in two different ways:
        # 1. as part of any of the karate-base or karate-config (eg. afterScenario set in karate-base)
        # 2. directly in the feature file like the following afterFeature
        * configure afterFeature = 
        """
        function(){
            karate.log('after feature:', karate.scenario.name);
            karate.call('after-feature.feature', { caller: karate.feature.fileName });
        }
        """
    
    Scenario: Demo Scenario 1
        * print 'uuid(): ' + uuid()
        * print 'demo scenario 1'
        * print 'jdbcUrl: ' + database.jdbcUrl

    Scenario: Demo Scenario 2
        * print 'demo scenario 2'
        * def queries = read('classpath:json/queries.json')
        * print replacePlaceholders(queries.insert, configuration.yamlConfiguration)

    Scenario: Demo Scenario 3
        * print 'demo scenario 3'
        * call read('classpath:features/common.feature')
