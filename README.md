# node-proxy
A simple node proxy server. Forwards the incoming request to the actual server.

## Usage
Start the server:
```
npm start
```

In another tab, test it out with cURL:
```
export http_proxy=127.0.0.1:1337
curl -L cnn.com
```

Enjoy the page data, proxied by the node service!
