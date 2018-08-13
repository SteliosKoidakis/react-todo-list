import React from 'react';
import { shallow } from 'enzyme';

import TodoSection from './TodoSection';
import CreateTodo from '../containers/CreateTodo';
import Todo from '../containers/Todo';

describe('Todo-section component', () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<TodoSection todos={[]} fetchTodos={() => {}} />);
  });
  it('renders without crashing', () => {
    shallow(<TodoSection todos={[]} fetchTodos={() => {}} />);
  });
  it('Render a <CreateTodo /> components', () => {
    expect(wrapper.find(CreateTodo)).toHaveLength(1);
  });

  it('Render one <Todo />', () => {
    wrapper.setProps({ todos: [{ id: '1', text: 'test' }] });
    expect(wrapper.find(Todo)).toHaveLength(1);
  });

  it('Render 0 <Todo />', () => {
    wrapper.setProps({ todos: [] });
    expect(wrapper.find(Todo)).toHaveLength(0);
  });
});
