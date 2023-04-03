function fn() {
  karate.log('executing karate-config...');
  karate.log(uuid());
  var config = {
    baseUrl: 'http://localhost:8082',
    petstoreUrl: 'https://petstore3.swagger.io/api/v3'
  }
  return config;
}