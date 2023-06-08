@demos @petstore
Feature: PetStore Test

    Background: background setup
        * print 'background setup'
        * print 'petStoreURL: ' + petstoreUrl
        * url petstoreUrl
    
    Scenario: Get AddPet
        Given path '/pet'
        And request { id: '1', name: 'puppy', status: 'SLEEP' }
        When method POST
        Then status 200

    Scenario: Get FindByStatus
        Given path '/pet/findByStatus'
        And params { status: 'SLEEP' }
        When method GET
        Then status 200
        And response[0].id == 1

