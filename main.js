var _store = Redux.createStore(_appReducer);

var removeTodoStore = function(id) {
  _store.dispatch(_removeTodo({id: id}));
};

var addTodoStore = function(item) {
  _store.dispatch(_addTodo(item));
};

/**
 * Bad approach- will clear entire dom and redraw
 * will work for POC
 */
var updateTodoListDom = function(todoListDom, items) {
  $(todoListDom).empty(); // jquery will remove eventListenr too
  items.forEach(function(item) {
    var itemDom = '<p>'
        + item.name
        + '&nbsp;&nbsp;'
        + '<button onclick="removeTodoStore('
        + item.id
        + ');">X</button>';

    $(todoListDom).append(itemDom);
  });
};


$(document).ready(function() {
  var inputText = $('#inputText');
  $('#addButton').on('click', function() {
    var itemName = inputText.val();
    var item = {};
    if (itemName) {
      item.id = _store.getState().count;
      item.name = itemName;
      addTodoStore(item);
    }
  });

  // populating initial todo list
  var items = _store.getState().items;
  var todoListDom = $('#todoList');

  updateTodoListDom(todoListDom, items);

/**
 * subscribing to store change
 * A good approach would be compare currentState with previousState
 * and if some changes found- update dom
 */
  _store.subscribe(function(previousState, currentState) {
    updateTodoListDom(todoListDom, _store.getState().items);
  });
});