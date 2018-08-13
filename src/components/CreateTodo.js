import React from 'react';
import PropTypes from 'prop-types';

import { InputGroup } from '../stelios-ui';

export default class CreateTodo extends React.Component {
  state = {
    todo: ''
  };

  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  submitTodo = () => {
    const { todo } = this.state;
    const { createTodo } = this.props;
    createTodo(todo);
  };

  render() {
    const { todo } = this.state;
    return (
      <InputGroup>
        <InputGroup.Input
          type="text"
          placeholder="add a todo item"
          defaultValue={todo}
          onChange={this.onChange}
        />
        <InputGroup.Button disabled={!todo} onClick={this.submitTodo}>
          Add
        </InputGroup.Button>
      </InputGroup>
    );
  }
}

CreateTodo.propTypes = {
  createTodo: PropTypes.func.isRequired
};
