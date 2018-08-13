import { connect } from 'react-redux';
import TodoSection from '../components/TodoSection';

import { fetchTodos as fetchItems } from '../actions';

const mapStateToProps = state => ({
  todos: state.todos
});

const mapDispatchToProps = dispatch => ({
  fetchTodos: () => dispatch(fetchItems())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoSection);
