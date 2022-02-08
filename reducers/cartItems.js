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
        case 'ADJUST_QTY':
            return{...state, cart: state.cart.map(item=>item.id === action.payload.id ? {...item, qty:action.payload.qty} : item)}
        }
        return state
}

export default cartItems;

