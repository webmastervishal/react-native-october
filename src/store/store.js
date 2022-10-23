import { createStore, applyMiddleware, combineReducers } from "redux";
import currencyReducer from "./../components/reducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  currency: currencyReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

// console.log("store", store.getState());

export default store;
