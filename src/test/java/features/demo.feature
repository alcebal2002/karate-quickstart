@demos
Feature: Demo Test

    Background: background setup
        * print 'background setup'
        * print 'baseUrl: ' + baseUrl
    
    Scenario: Demo Scenario 1
        * print 'demo scenario 1'
        * print 'jdbcUrl: ' + database.jdbcUrl

    Scenario: Demo Scenario 2
        * print 'demo scenario 2'
        * def queries = read('classpath:json/queries.json')
        * print functions.replacePlaceholders(queries.insert, configuration.yamlConfiguration)
