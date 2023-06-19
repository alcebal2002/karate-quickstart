@mock
Feature: Mock

Background: 
* configure cors = true
* configure responseHeaders = { 'Content-Type': 'application/json' }

# can be populated from petstore-openapi.yml#/components/examples
* def pets = []
* def requestsFileName = 'requests.http'
* def contentTypeHeader = 'Content-Type: application/json'
* def writeHttpInteraction = karate.read('classpath:js/write-http-interaction.js')

# Update an existing pet
@updatePet
Scenario:  methodIs('put') && pathMatches('/pet')
  ## TODO review this find by id and remove this comment
  * def index = pets.findIndex(pet => pet.id == request.id)
  * def response = (index >= 0? pets[index] = request : null)
  * def responseStatus = index >= 0? 200 : 404

# Add a new pet to the store
@addPet
Scenario:  methodIs('post') && pathMatches('/pet')
  * writeHttpInteraction(requestsFileName,requestMethod,requestUrlBase,requestUri,requestParams,contentTypeHeader,karate.pretty(request))
  * def pet = request
  * pets.push(pet)
  * def response = pet
  * def responseStatus = 200

# Finds Pets by status
@findPetsByStatus
Scenario:  methodIs('get') && pathMatches('/pet/findByStatus') && paramExists('status')
  * writeHttpInteraction(requestsFileName,requestMethod,requestUrlBase,requestUri,requestParams,contentTypeHeader,null)
  * def status = paramValue('status')
  * def response = pets.filter(pet => pet.status == status)
  * def responseStatus = 200

# Finds Pets by tags
@findPetsByTags
Scenario:  methodIs('get') && pathMatches('/pet/findByTags')
  * def tags = paramValue('tags')
  ## TODO review this filter and remove this comment
  * def response = pets.filter(pet => pet)
  * def responseStatus = 200
