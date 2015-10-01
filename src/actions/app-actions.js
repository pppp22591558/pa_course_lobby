import Dispatcher from '../dispatchers/app-dispatcher';
import ActionTypes from '../constants/ActionTypes';

var AppActions = {
  addItem: function(item){
    Dispatcher.handleViewAction({
      actionType: ActionTypes.ADD_ITEM,
      item: item
    });
  }
};

export default AppActions;
