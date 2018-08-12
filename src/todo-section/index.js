import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Row, Column, List } from '../stelios-ui';
import CreateTodoSection from './CreateTodo';
import TodoItem from './Todo';

export const TodoSection = ({ todos }) => (
  <div>
    <Container>
      <Row>
        <Column mobile={12} desktop={12}>
          <CreateTodoSection />
        </Column>
      </Row>
      <Row>
        <Column mobile={12} desktop={12}>
          <List>
            {todos && todos.map(item => <TodoItem key={item.id} item={item} />)}
          </List>
        </Column>
      </Row>
    </Container>
  </div>
);

TodoSection.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

const mapStateToProps = state => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  null
)(TodoSection);
