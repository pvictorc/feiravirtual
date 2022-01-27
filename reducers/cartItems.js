const initialState = {
    cart:[],
}

const cartItems = (state = initialState, action) => {
    let cart = state.cart;
    switch(action.type) {
        case 'ADD_TO_CART':
            return{...state, cart:[...state.cart, action.payload]};
        case 'REMOVE_FROM_CART':
            return{cart:[...state.cart.filter(item => item.id !== action.payload.id)]}
        }
        return state
     /*   switch(action.type){
            case 'ADD_TO_CART':
                return{...state, cart:[...state.cart, action.payload]}
            case 'REMOVE_FROM_CART':
                return{cart:[...state.cart.filter(item => item.id != action.payload)]}
                // {...state, cart:[...state.cart.filter((id)=>{ id !== action.payload})]}
                case 'SELECTED_ITEMS':
                    return{...state, selectedItem:[...state.selectedItem, action.payload]}
                default:
                    
    }      */
}

export default cartItems;

