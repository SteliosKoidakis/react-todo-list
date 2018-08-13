import React from 'react';
import PropTypes from 'prop-types';

import { Container, Row, Column, List } from '../stelios-ui';
import CreateTodo from '../containers/CreateTodo';
import Todo from '../containers/Todo';

class TodoSection extends React.Component {
  componentDidMount = () => {
    const { fetchTodos } = this.props;
    fetchTodos();
  };

  render() {
    const { todos } = this.props;
    return (
      <div>
        <Container>
          <Row>
            <Column mobile={12} desktop={12}>
              <CreateTodo />
            </Column>
          </Row>
          <Row>
            <Column mobile={12} desktop={12}>
              <List>
                {todos && todos.map(item => <Todo key={item.id} item={item} />)}
              </List>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

TodoSection.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  fetchTodos: PropTypes.func.isRequired
};

export default TodoSection;
