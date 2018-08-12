import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import {
  deleteTodo as deleteItem,
  editTodo as editItem,
  completeTodo as completeItem
} from '../actions';
import { Button, List } from '../stelios-ui';

export class Todo extends React.Component {
  state = {
    edit: false,
    todo: ''
  };

  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  removeTodo = () => {
    const { item } = this.props;
    const { deleteTodo } = this.props;
    deleteTodo(item.id);
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
    const { item, editTodo } = this.props;
    editTodo(item.id, todo, item.complete);
    this.setState({ edit: false });
  };

  changeTodoStatus = () => {
    const { item, completeTodo } = this.props;
    completeTodo(item.id, item.text, item.complete);
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
  deleteTodo: PropTypes.func.isRequired,
  editTodo: PropTypes.func.isRequired,
  completeTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteItem(id)),
  editTodo: (id, text) => dispatch(editItem(id, text)),
  completeTodo: (id, text, complete) => dispatch(completeItem(id, text, complete))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
