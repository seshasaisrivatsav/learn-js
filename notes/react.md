# React Concepts

### General Guidelines
- A component owning the state should be the one modifying it
- 

### setState
setState - passing only necessary arguments
```
setState(prev => {
  return {
    ...prev, 
    changedState,
    something: value,
  }
})
```

### useEffect

#### ClassTraditional way
```
componentDidMount()
componentDidUpdate()
componentWillUnmount() -> Clean up code is return
```
#### componentWillUpdate
Receives newProps, newState and is called *before* render method
```
componentWillUpdate(newProps, newState)
```
#### componentDidUpdate
Receives previousProps, previousState for arguments and is called *after* render method
```
componentDidUpdate(previousProps, previousState)
```
#### componentWillUnmount
is invoked immediately before a component is unmounted and destroyed. Perform any necessary cleanup in this method, such as invalidating timers, canceling network requests, or cleaning up any subscriptions that were created in componentDidMount().


#### Functional way
All logic is placed here. Happens when a component is mounted and update happens. The `func` is triggered, every time component is rendered.

```
useEffect(func, [])
```

1. The first argument: Func -> A function that is triggered anytime props received and state changes
2. The second argument: Array of dependencies -> To prevent rerenders for every prop/state change. Only when the passed argument changes, update.


Equivalent of `componentWillUnmount` in `useEffect`

```
useEffect(() => {
  //  logic

  return () => {
     // clean up code (similar to what you write in componentWillUnmount)
  }
 
}, [dependencies]);
```

#### Reusing hooks
If a hook is used in multiple files, you can export the hook under hooks folder with `use<>` name. Import it in components of choice.

## Context
- Context is used when we don't want to pass things down in props
- When react renders a component that subscribes to a context, it will read the current context value from closest matching `Provider` in the tree.
- React just compares old and new context using `===`


### Provider
- Every context object comes with a "Provider React component" that allows consuming components to subscribe to context changes
- Provider accepts a `value` prop to be passed to consuming descending components 
- Consumers will rerender when providers value prop changes

### Consumer
- A React Component that subscribes to context changes
- Allows to subscribe to a context within a function component


### useContext
- useContext - takes in a context argument and gives value of nearest provider

### Creating context
CreatePoopContext.jsx
```js
import { createContext } from 'react';

const CreatePoopContext = createContext({
  isOpen: false, // 
  openPanel: () => {},
  closePanel: () => {}, 
});
export default CreatePoopContext;
```


CreatePoopProvider.jsx
```js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CreatePoopContext from './CreatePoopContext';

function CreatePoopProvider({ children }) {
  const openPanel = () => {
    setState(prev => {
      return { ...prev, isOpen: true };
    });
  };

  const closePanel = () => {
    setState(prev => {
      return { ...prev, isOpen: false };
    });
  };

  const [state, setState] = useState({
    isOpen: false,
    openPanel,
    closePanel,
  });

  return <CreatePoopContext.Provider value={state}>{children}</CreatePoopContext.Provider>;
}

CreatePoopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export { CreatePoopProvider };
export default CreatePoopProvider;

```

Using it in app
```js
  <CreatePoopProvider>
        <Element1 />
        <Element2 />
  </CreatePoopProvider>
```

Testing it
```
import React from 'react';
import { shallow } from 'enzyme';

import { CreatePoopProvider } from './CreatePoopProvider';

describe('CreatePoopProvider', () => {
  const createWrapper = () => {
    return shallow(<CreatePoopProvider> </CreatePoopProvider>);
  };

  let provider;
  beforeEach(() => {
    provider = createWrapper();
  });

  describe('when openPanel is executed', () => {
    it('it should set isOpen to true', () => {
      expect(provider.prop('value').isOpen).toBeFalsy();

      provider.prop('value').openPanel();

      expect(provider.prop('value').isOpen).toBeTruthy();
    });
  });

  describe('when closePanel is executed', () => {
    it('it should set isOpen to true', () => {
      expect(provider.prop('value').isOpen).toBeFalsy();

      provider.prop('value').closePanel();

      expect(provider.prop('value').isOpen).toBeFalsy();
    });
  });
});

```
