
const setObject = {
  cart : [],
  total : "se actualiza desde aca principalmente"
}
export const cartInitialState = JSON.parse(window.localStorage.getItem('cart')) || setObject




export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  SEND_FORM: 'SEND_FORM',
  TOTAL_PRICE: 'TOTAL_PRICE'
};

// Función para actualizar el localStorage con el estado del carrito
export const updateLocalStorage = state => {
  window.localStorage.setItem('cart', JSON.stringify(state));
};

// Reducer
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      const { id } = action.payload;
      const productInCartIndex = state.cart.findIndex(item => item.id === id);
    
      if (productInCartIndex >= 0) {
        const newState = state.cart.map((item, index) => {
          if (index === productInCartIndex) {
            return {
              ...item, 
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        const totales = newState.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        console.log(totales)
        const newProducts = {
          cart  : newState,
          total : totales
        }
        updateLocalStorage(newProducts); 
        return newProducts;
      }
    
      const newState = [
        ...state.cart,
        {
          ...action.payload, // product
          quantity: 1
        }
      ];
      const totaly = newState.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      const newProducts = {
        cart  : newState,
        total : totaly
      }
      updateLocalStorage(newProducts); // Aquí también
      return newProducts;

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const { id: removeId } = payload;
      const filteredState = state.cart.filter(item => item.id !== removeId);
      const result = filteredState.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      const newFilters = {
        cart: filteredState,
        total : result
      }
      updateLocalStorage(newFilters);
      return newFilters;

    case CART_ACTION_TYPES.SEND_FORM:
      const cleared  = {
        cart : [],
        total : 0
      }
      localStorage.removeItem("cart")
      updateLocalStorage(cleared);
      return cleared;

    case CART_ACTION_TYPES.TOTAL_PRICE:
      return []

     
    case CART_ACTION_TYPES.CLEAR_CART:
      const clear  = {
        cart : [],
        total : 0
      }
      updateLocalStorage(clear);
      return clear;

    default:
  
      return state.cart;
  }
};