@mock
Feature: Mock

Background: 
* configure cors = true
* configure responseHeaders = { 'Content-Type': 'application/json' }

# can be populated from petstore-openapi.yml#/components/examples
* def pets = []

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
  * print 'method: ' + requestMethod
  * print 'uri: ' + requestUri
  * print 'headers: '
  * print requestHeaders
  * print 'request: '
  * print request
  * def pet = request
  * pets.push(pet)
  * def response = pet
  * def responseStatus = 200

# Finds Pets by status
@findPetsByStatus
Scenario:  methodIs('get') && pathMatches('/pet/findByStatus') && paramExists('status')
  * print 'method: ' + requestMethod
  * print 'uri: ' + requestUri
  * print 'headers: ' + requestHeaders
  * print 'request: ' + request
  * def status = paramValue('status')
  * print 'status: ' + status
  ## TODO review this filter and remove this comment
  * def response = pets.filter(pet => pet.status == status)
  * def responseStatus = 200

# Finds Pets by tags
@findPetsByTags
Scenario:  methodIs('get') && pathMatches('/pet/findByTags')
  * def tags = paramValue('tags')
  ## TODO review this filter and remove this comment
  * def response = pets.filter(pet => pet)
  * def responseStatus = 200

