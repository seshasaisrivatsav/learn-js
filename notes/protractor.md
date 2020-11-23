
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

### Tabs and windows

#### Check if navigated to a URL in new tab
```
const hasNavigatedToInNewTab = async expectedUrl => {
  const windowHandles = await browser.getAllWindowHandles();
  if (windowHandles.length > 1) {
    await browser.switchTo().window(windowHandles[windowHandles.length - 1]);
    try {
      await browser.driver
        .switchTo()
        .alert()
        .accept();
    } catch (e) {}
    const url = await browser.getCurrentUrl();
    console.log(`Current URL: ${url} Expected Url: ${expectedUrl}`);
    expect(url).toEqual(expectedUrl);
    await browser.switchTo().window(windowHandles[0]);
  }
};
```
#### Close all tabs
```
const closeOpenedTabs = async () => {
  const windowHandles = await browser.getAllWindowHandles();

  for (let i = 1; i < windowHandles.length; i++) {
    if (windowHandles[i]) {
      browser.driver.switchTo().window(windowHandles[i]);
      browser.driver.close();
    }
  }
  browser.driver.switchTo().window(windowHandles[0]);
};
```
#### Check if navigated to a URL
##### EC.urlIs
##### EC.urlContains
```
const hasNavigatedTo = async (expectedUrl, timeout) => {
  await browser.wait(EC.urlIs(expectedUrl), timeout).then(async res => {
    console.log(`Expected URL: ${expectedUrl}`);
    console.log(`Current URL: ${await browser.getCurrentUrl()}`);
    expect(res).toBeTruthy();
  });
};

const hasUrlIncluded = async (expectedUrl, timeout ) => {
  await browser.wait(EC.urlContains(expectedUrl), timeout).then(async res => {
    console.log(`Expected URL: ${expectedUrl}`);
    console.log(`Current URL: ${await browser.getCurrentUrl()}`);
    expect(res).toBeTruthy();
  });
};
```


### check if element is not on page
```
$EC.stalenessOf
```

### Check if we are on a URL 
```
  await browser.wait(EC.urlContains(expectedUrl), timeout).then(res => {
 
    expect(res).toBeTruthy();
```
