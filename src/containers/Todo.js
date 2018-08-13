import { connect } from 'react-redux';

import Todo from '../components/Todo';

import { removeTodo as removeItem, updateTodo as updateItem } from '../actions';

const mapDispatchToProps = dispatch => ({
  removeTodo: id => dispatch(removeItem(id)),
  updateTodo: (id, text, complete) => dispatch(updateItem(id, text, complete))
});

export default connect(
  null,
  mapDispatchToProps
)(Todo);
