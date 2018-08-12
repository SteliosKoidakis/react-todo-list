import React from 'react';
import { shallow } from 'enzyme';

import { TodoSection } from './index';
import CreateTodoSection from './CreateTodo';
import TodoItem from './Todo';

it('renders without crashing', () => {
  shallow(<TodoSection todos={[]} />);
});

describe('Todo-section component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoSection todos={[]} />);
  });

  it('Render a <CreateTodo /> components', () => {
    expect(wrapper.find(CreateTodoSection)).toHaveLength(1);
  });

  it('Render one <Todo />', () => {
    wrapper.setProps({ todos: [{ id: 1, text: 'test' }] });
    expect(wrapper.find(TodoItem)).toHaveLength(1);
  });

  it('Render 0 <Todo />', () => {
    wrapper.setProps({ todos: [] });
    expect(wrapper.find(TodoItem)).toHaveLength(0);
  });
});
