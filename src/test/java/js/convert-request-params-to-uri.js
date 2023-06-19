function fn(obj) {
    const params = [];

    for (const key in obj) {
      if (obj.hasOwnProperty(key)) {
        const values = obj[key];
        if (Array.isArray(values)) {
          values.forEach(value => {
            const param = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            params.push(param);
          });
        }
      }
    }
    let queryString = params.join('&');
    if (queryString) queryString = '?'+queryString;
    return queryString;
  }