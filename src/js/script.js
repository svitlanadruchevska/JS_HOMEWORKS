'use strict';

const parseUrl = function (url) {
  const parsedUrl = new URL(url);

  return {
    href: parsedUrl.href,
    protocol: parsedUrl.protocol,
    host: parsedUrl.host,
    hostname: parsedUrl.hostname,
    pathname: parsedUrl.pathname,
    search: parsedUrl.search,
    hash: parsedUrl.hash,
    origin: parsedUrl.origin,
    password: parsedUrl.password,
    port: parsedUrl.port
  };
}
const url = 'https://example.com:8080/path/name?query=123#hash';
const parsedUrl = parseUrl(url);
console.log(parsedUrl);
