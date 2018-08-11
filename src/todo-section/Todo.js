import React from 'react';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { deleteTodo, editTodo } from '../actions';
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
    editTodo(item.id, todo);
    this.setState({ edit: false });
  };

  render() {
    const { item } = this.props;
    const { edit } = this.state;
    return (
      <List.Item onClick={!edit ? this.editTodo : null}>
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
  deleteTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  deleteTodo: id => dispatch(deleteTodo(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
