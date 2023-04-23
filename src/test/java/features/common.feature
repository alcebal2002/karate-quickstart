@ignore
Feature: Common Feature Test

    Background: background setup
        * print 'common background setup'
        * print 'baseUrl: ' + baseUrl
    
    Scenario: Common Scenario
        * print 'uuid(): ' + uuid()
        * print 'common scenario'
