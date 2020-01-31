# React Concepts

### useEffect

#### ClassTraditional way
```
componentDidMount()
componentDidUpdate()
componentWillUnmount() -> Clean up code is return
```

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
