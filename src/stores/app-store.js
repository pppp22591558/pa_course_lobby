import Dispatcher from '../dispatchers/app-dispatcher';
import AppActions from '../actions/app-actions';
import ActionTypes from '../constants/ActionTypes';

var AppStore = {
  addItem: function(item){
    AppActions.addItem(item);
  }
};

export default AppStore;
