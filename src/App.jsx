import { Products } from './components/Products';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Cart } from './components/Cart';
import { CartProvider } from './context/cart';
import { ProductsProvider } from './context/products';

function App() {

  return (
    <CartProvider>
        <Header/>
        <Cart/>
        <ProductsProvider>
        <Products />
        </ProductsProvider>
        <Footer />
    </CartProvider>
  )
}

export default App;
