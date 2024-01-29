'use strict';

const updateQueryString = function (url, key, value) {
  const parsedUrl = new URL(url);
  parsedUrl.searchParams.set(key, value);

  return parsedUrl.toString();
}

console.log(updateQueryString('https://example.com/path?query=123', 'query', '456'));
console.log(updateQueryString('https://example.com/path?query=123', 'newParam', '772'));
