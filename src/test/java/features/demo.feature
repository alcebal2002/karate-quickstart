@demos
Feature: Demo Test

    Background: background setup
        * print 'background setup'
        * print 'baseUrl: ' + baseUrl
    
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
