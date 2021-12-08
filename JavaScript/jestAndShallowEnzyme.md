## Jest handy notes

### Mocking a module that returns promise

## Jest Mock Basics
### Loading modules under test
- Why do we need to reload modules
- Ans: If modules are reloaded in isolation, then if we need to mock or change a dependency that is not a Function or to test logic that occurs inline a module

if we do the below in test
```
import {functionName} from "./moduleUnderTest";
jest.mock("./moduleUnderTest");
```
Then, jest behind the scenes does this
```
jest.mock("./moduleUnderTest")
import {functionName} from "./moduleUnderTest"
```

##### jest.mock calls are hoisted at the top of the file

##### To Tackle this we can use jest.isolateModules helpers
```
const loadModulesUnderTest = async modulesToBeLoaded => {
  const modulePromises = [];
  jest.isolateModules(() => {
    modulePromises.push(...modulesToBeLoaded());
  });
  const moduleInstances = await Promise.all(modulePromises);
  const moduleExports = Object.assign({}, ...moduleInstances, { default: [] });
  moduleInstances.forEach(moduleInstance => {
    moduleExports.default.push(moduleInstance.default);
  });
  return moduleExports;
};

```

##### Using the above helper

At the top of spec file
```
let moduleDefault;
let namedExport;

const loadModules = async () -> {
  // Mock any modules you need
  jest.mock("../module", () => {
    __esModule: true,
    default: jest.fn()
  })
  
  jest.mock("../module1/something", () => {
    __esModule: true,
    namedExport: jest.fn(),
  })
  
  const exports = await loadModulesUnderTest(() => [
    require("../module1"),
    require("../module1/something"),
  ]);
  
  ({namedExport} = exports);
  [, moduleDefault] = exports.default;
}

```



#### Source
```
const somePromiseLibrary = new Promise(); // promise impl
export default somePromiseLibrary;
export { default as somePromiseLibraryName };
```

#### Test
Make sure you don't import it here
```
const mockModule = () => {
  const tmp = {};
  const somePromiseLibraryName = new Promise((resolve, reject) => {
    tmp.resolve = resolve;
    tmp.reject = reject;
  });
  Object.assign(somePromiseLibraryName, tmp);

  let somePromiseLibraryModule;
  jest.isolateModules(() => {
    somePromiseLibraryModule = require('somePromiseLibraryName'); // eslint-disable-line global-require
  });
  somePromiseLibraryModule.somePromiseLibraryName = somePromiseLibraryName;

  return somePromiseLibraryModule;
};

```


### Mocking a promise
Source:
```
import getSomethingPromise from 'external-module';

const testFn = params => {
  const results = getSomethingPromise(params);
  return results.promise.Response.then(data => {
    if (data.info && data.info.length === 0) {
      return false;
    }
    return true;
  })
};

export { testFn }
```
Test:
```
describe('when testFn is called', () => {
    afterEach(() => {
      getSomethingPromise.mockClear();
    });
    describe('and the getCampaignData has any campaigns', () => {
      beforeEach(() => {
        getSomethingPromise.mockImplementation(() => ({
          promise: {
            Response: Promise.resolve({ info: [] }),
          },
        }));
      });
      it('it should return true ', async () => {
        const exists = await testFn({ name: 'some campaign name' });
        expect(exists).toBeTruthy();
      });
    });
```
### Testing a promise

There are several ways to do it 
1. using async [tutorial/docs](https://jestjs.io/docs/en/tutorial-async)
2.If the below `exectCallBack` is not used, then the frame work will not wait for results, but goes till the end and test passes. To Ensure we go in this flow, we use the callback
```js
  describe('when something', () => {
    it('that has assertion inside the result of an promise', (exectCallBack) => {
          let promise = callMethodThatReturnsPromise();
          return promise.then(value => {
            expect(value).toBeDefined();
            exectCallBack(); // This will ensure, this is executed
        });
    });
  });
```

If you just want to see if a promise is resolved or failed, then do this.
```js
  describe('when something', () => {
    it('that has assertion inside the result of an promise', (exectCallBack) => {
          let promise = callMethodThatReturnsPromise();
          return promise;
        });
    });
  });
```

## Test if promise throws an error
```
expect(promise).rejects.toThrow("promise error");
```

### Mock Function Mock Calls (Function passed as an argument to a mock function)
```
const paramFn = mockFn.mock.calls[callIndex][parameterIndex];
paramFn();
```
or
```
mockFn.mock.calls[callIndex][parameterIndex]();
```

https://jestjs.io/docs/en/mock-function-api#mockfnmockcalls

### Mocking an import method

In Source
```js
import method from '../file';
```
In Test
```js
import method from '../file';
jest.mock('../file');
```
#### To track calls
```
expect(method).toHaveBeenCalledTimes(1)
expect(method).toHaveBeenCalledWith(something);
```

#### To return a value
```
method.mockReturnValue('')
```

### Mocking a module ([doMock](https://jestjs.io/docs/en/jest-object#jestdomockmodulename-factory-options))
```

jest.doMock('ctct-helpers', () => {
  return {
    __esModule: true,
    default: 
    getEnv: jest.fn().mockImplementation(() => {
      return '.l1.';
    }),
  };
});
```

### Mocking window

Source
```
const navigate = url => {
  window.location = url;
};

export default navigate;
```


Test
```
import navigate from './navigate';

describe('Testing navigate', () => {
  describe('when url is supplied to navigate', () => {
    it('it should change the window.location', () => {
      global.window = Object.create(window);
      Object.defineProperty(window, 'location', {
        value: {
          href: 'http://old.com',
        },
        configurable: true,
        writable: true,
      });
      expect(window.location.href).toEqual('http://old.com');
      navigate('http://new.com');
      expect(window.location).toEqual('http://new.com');
    });
  });
});

```

## `requireActual` Using a real export 
```
const { comething } = jest.requireActual('./module');
```

## Using jest.mock __esModule v/s jest.mock(something)
- jest.mock() with __esModule  - to mock modules that have default export
- if there are require styled imports, then you don't need `__esModule`

## jest.mock
```
 jest.fn().mockName("mockFunctionName")
```

## advance timer
API is called, all timers are advanced by msToRun milliseconds. All pending "macro-tasks" that have been queued via setTimeout()
```
 jest.advanceTimersByTime(1000) //ms
 ```

# Testing React components 

## Creating wrapper

```
import React from 'react';
import { mount } from 'enzyme';
  const createWrapper = p => {
    return mount(<MyComponent t={t} closePanel={p.closePanel} isOpen={p.isOpen} selection={p.selection} />);
  };
  beforeEach(() => {
    wrapper = createWrapper(props);
  });
```

### Finding elements
1. Using dataQEID
```
expect(wrapper.find(Dropdown).filter('[data-qe-id="qe-id"]')).toBeTruthy();
```

2. Using their type

```
 title = wrapper.find("h3").filter('[data-qe-id="signup-blocker-dialog-title"]');
 content = wrapper.find("p").filter('[data-qe-id="signup-blocker-dialog-content"]');
```

### Simulate

Add data to input
```
nameInput = wrapper.find(...);
nameInput.simulate('change', { target: { value: 'text' } });
```
To make sure that the simulation takes effect
```
setImmediate(() => {
  wrapper.update();
  done();
});
```

        
