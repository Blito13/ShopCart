import { useState } from 'react';
import { Products } from './components/Products';
import {products as initialProducts} from './mocks/products';
import { Header } from './components/Header';
import { IS_DEVELOPMENT } from './components/config';
import { Footer } from './components/Footer';
import { useFilters } from './hooks/useFilters';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';
import { SendCart } from './components/SendCart';
import { Form } from './components/Form';

function App() {

 
  const {filters ,filterProducts} = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
        <Header/>
        <Cart/>
        <Form/>
        <Products products={filteredProducts}/>
        <Footer />
    </CartProvider>
  )
}

export default App;
