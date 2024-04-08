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
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {

 
  const {filters ,filterProducts} = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <BrowserRouter>
        
        <Cart/>
        <Routes>
          <Route path = "/" element={<Header/>}/>
        <Route path="/takeOrder" element={<Form/>}/>
        </Routes>
        <Products products={filteredProducts}/>
  {IS_DEVELOPMENT && <Footer />}
      </BrowserRouter>
    </CartProvider>
  )
}

export default App;
