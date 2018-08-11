import React from 'react';
import { shallow } from 'enzyme';

import { CreateTodo } from './CreateTodo';
import { Button, Input } from '../stelios-ui';

describe('CreateTodo component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<CreateTodo />);
  });
  it('renders a <Input /> components', () => {
    expect(wrapper.find(Input)).toHaveLength(1);
  });
  it('renders a <Button /> components', () => {
    expect(wrapper.find(Button)).toHaveLength(1);
  });

  it('<Button /> is not disabled when input has a value', () => {
    wrapper.setState({ todo: 'test' });
    expect(wrapper.find(Button).prop('disabled')).toEqual(false);
  });
});
