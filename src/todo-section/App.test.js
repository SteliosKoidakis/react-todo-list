import React from 'react';
import { shallow } from 'enzyme';

import { App } from './App';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

it('renders without crashing', () => {
  shallow(<App />);
});

describe('App component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  });

  it('renders a <CreateTodo /> components', () => {
    expect(wrapper.find(CreateTodo)).toHaveLength(1);
  });

  it('render one <Todo />', () => {
    wrapper.setProps({ todos: [{ id: 1, text: 'test' }] });
    expect(wrapper.find(Todo)).toHaveLength(1);
  });

  it('render 0 <Todo />', () => {
    wrapper.setProps({ todos: [] });
    expect(wrapper.find(Todo)).toHaveLength(0);
  });
});
