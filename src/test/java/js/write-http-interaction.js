function fn(requestsFileName, requestMethod, requestUrlBase, requestUri, requestParams, contentTypeHeader, body) {
    let content = '';
    let convertRequestParamsToUri = karate.read('classpath:js/convert-request-params-to-uri.js');

    try {
      content = karate.readAsString('classpath:' + requestsFileName);
      karate.log('File ' + requestsFileName + ' found. Reading content');
      content += '\n';
    } catch (e) {
      karate.log('Unable to read ' + requestsFileName + ' file. Continue');
    }
    content += '### ' + requestMethod + ' ' + requestUri + '\n';
    content += requestMethod + ' ' + requestUrlBase + requestUri + convertRequestParamsToUri(requestParams);
    content += '\n' + contentTypeHeader;
    if (body != null) content += '\n\n' + body;
    karate.write(content, 'test-classes/' + requestsFileName);
  }
