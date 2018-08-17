/**
 * can populate initial state from localstorage
 */
var initialState = {
  count: 0,
  items: []
};

var _appReducer = function(state = initialState, action) {
  var count = state.count;
  var items = state.items.concat(); // immmutability

  switch (action.type) {
    case 'ADD': {
      count++;
      items.push(action.payload);
      return {
        count: count,
        items: items
      };
      break;
    }
    case 'REMOVE': {
      count--;
      var indexToBeRemoved = 0;
      for (var i = 0; i < items.length; i++) {
        if (items[i].id == action.payload.id) {
          indexToBeRemoved = i;
          break;
        }
      }
      items.splice(indexToBeRemoved, 1);
      return {
        count: count,
        items: items
      };
      break;
    }
    default:
      return state;
  }
}