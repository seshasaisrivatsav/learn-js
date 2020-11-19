
### Maximizing window
```
  await browser
    .manage()
    .window()
    .maximize();
```


### Set browser size
```
return new Promise(resolve => {
    try {
      browser
        .manage()
        .window()
        .setSize(width, height)
        .then(() => {
          $log(`Resized window to width X height: ${width}x${height}`);
          resolve();
        });
    } catch (e) {
      // do nothing;
    }
  });
```
