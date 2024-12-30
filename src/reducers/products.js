
const setProductos = {
    products:[]
};

export const productsState = JSON.parse(window.localStorage.getItem('productos')) || setProductos

export const PRODUCT_ACTION_TYPES = {
  GET_PROD: 'GET_PROD',
};

// Función para actualizar el localStorage con el estado del carrito
export const updateLocalStorage = state => {
  window.localStorage.setItem('productos', JSON.stringify(state));
};

// Reducer
export const productsReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case PRODUCT_ACTION_TYPES.GET_PROD:
         updateLocalStorage(newProducts); 
        return newProducts;
   

    default:
  
      return state.cart;
  }
};