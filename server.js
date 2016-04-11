const http = require('http');
const url = require('url');

var proxy = http.createServer( (req, res) => {
  console.log(req.url);
  req.pause();
  var requestUrl = url.parse(req.url);
  var options = {
    port: requestUrl.port || 80,
    hostname: requestUrl.host,
    method: req.method,
    path: requestUrl.path
  };

  var connector = http.request(options, function(serverResponse){
    serverResponse.pause();
    res.writeHead(serverResponse.statusCode, serverResponse.headers);
    serverResponse.pipe(res);
    serverResponse.resume();
  });
  req.pipe(connector);
  req.resume();
});

// now that proxy is running
proxy.listen(1337, '127.0.0.1', () => {
  console.log("Proxy running");
});
