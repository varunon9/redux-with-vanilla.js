var _addTodo = function(item) {
  return {
    type: 'ADD',
    payload: item
  };
};

var _removeTodo = function(item) {
  return {
    type: 'REMOVE',
    payload: item
  };
};