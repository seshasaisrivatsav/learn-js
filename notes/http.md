
### RestHandler
 RestHandler is built around window.fetch() and the get() method takes url, opts
```
return new RestHandler(baseUrl).get(path, { mode: 'cors', credentials: 'include' });
```


### axios

axios.defaults.withCredentials = true;
