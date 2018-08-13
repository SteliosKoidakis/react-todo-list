import { connect } from 'react-redux';

import CreateTodo from '../components/CreateTodo';
import { createTodo as createItem } from '../actions';

const mapDispatchToProps = dispatch => ({
  createTodo: text => dispatch(createItem(text))
});

export default connect(
  null,
  mapDispatchToProps
)(CreateTodo);
