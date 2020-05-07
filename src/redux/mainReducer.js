import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth3807Reducer from '../features/EmailAuth3807/redux/reducers';
import EmailAuth3805Reducer from '../features/EmailAuth3805/redux/reducers';
import EmailAuthReducer from '../features/EmailAuth/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth3807: EmailAuth3807Reducer,
EmailAuth3805: EmailAuth3805Reducer,
EmailAuth: EmailAuthReducer,

});