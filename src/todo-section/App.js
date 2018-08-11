import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Row, Column, List } from '../stelios-ui';
import CreateTodo from './CreateTodo';
import Todo from './Todo';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Column mobile="12" desktop="12">
              <CreateTodo />
            </Column>
          </Row>
          <Row>
            <Column mobile="12" desktop="12">
              <List>
                {this.props.todos
                  && this.props.todos.map(item => (
                    <Todo key={item.id} item={item} />
                  ))}
              </List>
            </Column>
          </Row>
        </Container>
      </div>
    );
  }
}

App.propTypes = {
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
)(App);
