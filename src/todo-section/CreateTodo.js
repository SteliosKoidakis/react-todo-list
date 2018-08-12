import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { addTodo as addItem } from '../actions';
import { InputGroup } from '../stelios-ui';

export class CreateTodo extends React.Component {
  state = {
    todo: ''
  };

  onChange = event => {
    this.setState({ todo: event.target.value });
  };

  submitTodo = () => {
    const { todo } = this.state;
    const { addTodo } = this.props;
    addTodo(todo);
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
  addTodo: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  addTodo: text => dispatch(addItem(text))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
