@demos
Feature: Demo Test

    Background: background setup
        * print 'background setup'
        * print 'baseUrl: ' + baseUrl
    
    Scenario: Demo Scenario
        * print 'demo scenario'
        * print 'jdbcUrl: ' + database.jdbcUrl
        * print functions.replacePlaceholders('INSERT ${services.database.port}', configuration.yamlConfiguration)
