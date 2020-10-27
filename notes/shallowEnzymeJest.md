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

2. Using 

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

        
