
const setObject = {
  cart : [],
  total : "se actualiza desde aca principalmente",
  discounts : 0
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
        //el descuento se aplica en solo 500 si se selecciona 1 docena y media del mismo producto
        const totales = newState.reduce((acc, curr) =>{
          let resta = 0;
          let halfDoz =  curr.quantity %6;
          let totalDoz = curr.quantity %12;
          let twelve =  curr.quantity /12;
          let six =  curr.quantity / 6;
          console.log(halfDoz , totalDoz);
          console.log(six ,"//", twelve);

          if(halfDoz === 0 && totalDoz === 6){
            resta+= 500;
          }
          if(halfDoz === 0 && totalDoz === 6 && six >2){
           
            resta = 0;
            resta += 500 *six + 1000
          }else if (halfDoz === 0 && totalDoz === 0){
           
            resta += 2000*twelve
          }
          return acc + (curr.price * curr.quantity) - resta;
        } , 0);

        const newProducts = {
          cart  : newState,
          total : totales,
          discounts : 0
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
      const totaly = newState.reduce((acc, curr) =>  {
         let resta = 0;
          let halfDoz =  curr.quantity %6;
          let totalDoz = curr.quantity %12;
          let twelve =  curr.quantity /12;
          let six =  curr.quantity / 6;
          console.log(halfDoz , totalDoz);
          console.log(six ,"//", twelve);

          if(halfDoz === 0 && totalDoz === 6){
            resta+= 500;
          }
          if(halfDoz === 0 && totalDoz === 6 && six >2){
           
            resta = 0;
            resta += 500 *six + 1000
          }else if (halfDoz === 0 && totalDoz === 0){
           
            resta += 2000*twelve
          }
        return acc + (curr.price * curr.quantity) - resta
      }, 0);
      
      const newProducts = {
        cart  : newState,
        total : totaly,
        discounts : 0
        
      }
      
      updateLocalStorage(newProducts); // Aquí también
      return newProducts;

    case CART_ACTION_TYPES.REMOVE_FROM_CART:
      const { id: removeId } = payload;
      const filteredState = state.cart.filter(item => item.id !== removeId);
      const result = filteredState.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);
      const newFilters = {
        cart: filteredState,
        total : result,
        discount : 0
      }
      updateLocalStorage(newFilters);
      return newFilters;

    case CART_ACTION_TYPES.SEND_FORM:
      const cleared  = {
        cart : [],
        total : 0,
        discounts : 0
      }
      localStorage.removeItem("cart")
      updateLocalStorage(cleared);
      return cleared;

    case CART_ACTION_TYPES.TOTAL_PRICE:
       // Calcula el precio total con descuentos
       const totalPriceWithDiscounts = state.cart.reduce((total, item) => {
        // Aquí puedes agregar la lógica para aplicar descuentos según la cantidad comprada
        // Por ejemplo, si el usuario compra 6 o más productos, aplicar un descuento del 10%, etc.
        // Puedes agregar condicionales aquí para verificar la cantidad de cada producto y aplicar el descuento correspondiente
        // Actualiza el precio total con descuentos
        return total + (item.price * item.quantity);
      }, 0);

      // Retorna un nuevo estado con el precio total actualizado
      return {
        ...state,
        total: totalPriceWithDiscounts
      };

     
    case CART_ACTION_TYPES.CLEAR_CART:
      const clear  = {
        cart : [],
        total : 0,
        discounts : 0
      }
      updateLocalStorage(clear);
      return clear;

    default:
  
      return state.cart;
  }
};