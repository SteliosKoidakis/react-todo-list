const BASE_URL = 'https://5b709a3fb5154a00148a5ab8.mockapi.io/todo-list/todos';

const http = (data, type, dispatch, receiveTodos) => {
  const body = data ? JSON.stringify(data) : null;
  const url = BASE_URL + (data && data.id ? `/${data.id}` : '');
  fetch(url, {
    method: type,
    body,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })
    .then(response => {
      if (response.status >= 400) {
        // TODO failure action
        console.log('error'); // eslint-disable-line
      }
      return response.json();
    })
    .then(response => dispatch(receiveTodos(response)));
};

export default http;
