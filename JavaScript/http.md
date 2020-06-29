
### Origin
Same origin
```
http://example.com/app1/index.html
http://example.com/app2/index.html
```
Same origin as http content is served through port 80 by default
```
http://Example.com:80
http://example.com
```
Different Origin (as the schemes are differnt)
```
http://example.com/app1
https://example.com/app2
```

Different origin as different scheme
```
http://example.com
http://www.example.com
http://myapp.example.com
```
### CORS
- Cross Origin Resource Sharing
- A mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served

####  CORS ERRORS
Access to `XMLHttpRequest` at `https://app.blab` from origin `https://poop` has been blocked by CORS policy.
Response to preflight request doesn't pass access control check. No `Access-Control-Allow-Origin` header is present on the requested resource

#### XMLHttpRequest
XMLHttpRequest (XHR) objects are used to interact with servers. You can retrieve data from a URL without having to do a full page refresh. This enables a Web page to update just part of a page without disrupting what the user is doing. XMLHttpRequest is used heavily in AJAX programming.

Example:
JavaScript code served from https://domain-a.com uses XMLHttpRequest to make a request for https://domain-b.com/data.json.

### RestHandler (fetch)
 RestHandler is built around window.fetch() and the get() method takes url, opts
```
return new RestHandler(baseUrl).get(path, { mode: 'cors', credentials: 'include' });
```


### axios

axios.defaults.withCredentials = true;
