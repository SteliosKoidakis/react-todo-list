import React from 'react';
import { shallow } from 'enzyme';

import Todo from './Todo';
import { List } from '../stelios-ui';

describe('Todo component', () => {
  let wrapper;
  const item = { text: 'test', id: 1, completeTodo: false };
  beforeAll(() => {
    wrapper = shallow(
      <Todo
        item={item}
        editTodo={() => {}}
        deleteTodo={() => {}}
        completeTodo={() => {}}
      />
    );
  });
  it('Renders a <Lits.Item /> component', () => {
    expect(wrapper.find(List.Item)).toHaveLength(1);
  });

  it('Renders a <List.ItemText /> components on render', () => {
    expect(wrapper.find(List.ItemText)).toHaveLength(1);
  });

  it('Renders a <List.ItemInput /> components on edit equal true', () => {
    wrapper.setState({ edit: true });
    expect(wrapper.find(List.ItemInput)).toHaveLength(1);
  });
});
