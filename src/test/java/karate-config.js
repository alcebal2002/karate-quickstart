function fn() {
  karate.log('executing karate-config...');
  karate.log(uuid());
  var config = {
    baseUrl: 'http://localhost:8082',
    petstoreUrl: 'http://localhost:8090'
  }
  return config;
}