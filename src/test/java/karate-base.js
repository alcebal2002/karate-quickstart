function fn() {
    karate.log('executing karate-base...');
    karate.configure('afterScenario', read('classpath:js/after-scenario.js'));
 
    return { 
        uuid: function () { return java.util.UUID.randomUUID() + '' },
        replacePlaceholders: karate.read('classpath:js/replace-placeholders.js')
    }
  }