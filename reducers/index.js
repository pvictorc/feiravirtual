import { combineReducers } from "redux";
import cartItems from "./cartItems";

const reducers = combineReducers({
    cartItems: cartItems,
});

const rootReducer = (state, action) => {
    return reducers(state,action);
}
export default rootReducer;