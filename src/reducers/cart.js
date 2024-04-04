export const cartInitialState =JSON.parse(window.localStorage.getItem('cart')) || []



export const CART_ACTION_TYPES = {
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CLEAR_CART: 'CLEAR_CART',
  SEND_FORM: 'SEND_FORM',
  TOTAL_PRICE: 'TOTAL_PRICE'
};

// Función para actualizar el localStorage con el estado del carrito
export const updateLocalStorage = (state) => {
  
  window.localStorage.setItem('cart', JSON.stringify(state));

};

// Reducer
export const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.ADD_TO_CART:
      /* console.log(state) */
    console.log(state)
 
      const { id } = action.payload;
      const productInCartIndex = state.findIndex(item => item.id === id);
    
      if (productInCartIndex >= 0) {
        const newProducts = state.cart.map((item, index) => {
          if (index === productInCartIndex) {
            return {
              ...item,
              quantity: item.quantity + 1
            };
          }
          return item;
        });
        const total = newProducts.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
        let newState = {
          cart : [
            ...cart,
            newProducts
          ],
          total : total
        }
        updateLocalStorage(newState); // Aquí actualizamos el localStorage con el nuevo estado que incluye tanto el carrito como el total
        return newState;
      }
    
      /* const total = state.cart.reduce((acc, curr) => acc + curr.price * curr.quantity, 0); */
      let newState = {
        cart :[
          ...cart,
          {
            ...action.payload, // product
            quantity: 1
          }],
          total,
        };
      updateLocalStorage(newState); // Aquí también
    
      return newState;

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const { id: removeId } = payload;
      const filteredState = state.filter(item => item.id !== removeId);
      updateLocalStorage(filteredState);
      return filteredState;

    case CART_ACTION_TYPES.SEND_FORM:
      updateLocalStorage([]);
      return [];

    case CART_ACTION_TYPES.TOTAL_PRICE:
      return []

     
    case CART_ACTION_TYPES.CLEAR_CART:
      updateLocalStorage([]);
      return [];

    default:
      return state;
  }
};