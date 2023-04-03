function fn() {
    karate.log('executing karate-base...');
    return { 
        uuid: function () { return java.util.UUID.randomUUID() + '' },
        replacePlaceholders: karate.read('classpath:js/replace-placeholders.js')
    }
  }