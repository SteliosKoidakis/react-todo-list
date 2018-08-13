import React from 'react';
import { PropTypes } from 'prop-types';

import { Button, List } from '../stelios-ui';

export default class Todo extends React.Component {
  state = {
    edit: false,
    todo: ''
  };

  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  removeTodo = () => {
    const { item } = this.props;
    const { removeTodo } = this.props;
    removeTodo(item.id);
  };

  editTodo = () => {
    const { edit, todo } = this.state;
    if (edit && todo) {
      this.saveTodo();
    } else {
      this.setState({ edit: true });
    }
  };

  cancelEdit = () => {
    this.setState({ edit: false });
  };

  saveTodo = () => {
    const { todo } = this.state;
    const { item, updateTodo } = this.props;
    updateTodo(item.id, todo, item.complete);
    this.setState({ edit: false });
  };

  changeTodoStatus = () => {
    const { item, updateTodo } = this.props;
    updateTodo(item.id, item.text, !item.complete);
  };

  render() {
    const { item } = this.props;
    const { edit } = this.state;
    return (
      <List.Item>
        {edit ? (
          <List.ItemInput
            type="text"
            placeholder="add a todo item"
            defaultValue={item.text}
            onChange={this.onChange}
          />
        ) : (
          <List.ItemText>{item.text}</List.ItemText>
        )}
        <List.ItemAside>
          {!edit && (
            <Button
              status
              onClick={this.changeTodoStatus}
              complete={item.complete ? item.complete : null}
            >
              {item.complete ? 'Done' : 'Not'}
            </Button>
          )}
          {edit && (
            <Button remove onClick={this.cancelEdit}>
              Cancel
            </Button>
          )}
          <Button remove onClick={this.editTodo}>
            {edit ? 'Save' : 'Edit'}
          </Button>
          {!edit && (
            <Button remove onClick={this.removeTodo}>
              x
            </Button>
          )}
        </List.ItemAside>
      </List.Item>
    );
  }
}

Todo.propTypes = {
  item: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired
};
