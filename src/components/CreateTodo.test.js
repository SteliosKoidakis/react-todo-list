import React from 'react';
import { shallow } from 'enzyme';

import CreateTodo from './CreateTodo';
import { InputGroup } from '../stelios-ui';

describe('CreateTodo component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CreateTodo createTodo={() => {}} />);
  });
  it('Renders a <InputGroup.Input /> components', () => {
    expect(wrapper.find(InputGroup.Input)).toHaveLength(1);
  });
  it('Renders a <InputGroup.Button /> components', () => {
    expect(wrapper.find(InputGroup.Button)).toHaveLength(1);
  });

  it('<Button /> is not disabled when input has a value', () => {
    wrapper.setState({ todo: 'test' });
    expect(wrapper.find(InputGroup.Button).prop('disabled')).toEqual(false);
  });
});
