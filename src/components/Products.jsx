import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
/* import  alfajoresChocolate from "../media/realMedia/alfajoresChocolate.jpeg" */

export function Products ({ products }) {
    const {addToCart ,cart,  total, removeFromCart ,clearCart} = useCart();
  
    const checkProductInCart = product => {
        return cart.cart.some(item => item.id === product.id)
    }
    return(
        <main className='products'>
           {/* <img src={alfajoresChocolate} alt = "ss"></img> */}
            <ul>
                {
                    products.slice(0,11).map(product =>{
                        const isProductInCart = checkProductInCart(product)
                        return (
                        <li key ={product.id}>
                            <img 
                            src={product.thumbnail} 
                            alt={product.title} 
                            />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div style = {{maxHeight : "120px" , fontSize : "small"}}>
                                <p>{product.description}</p>
                                <p>{product.brand}</p>
                            </div>
                            <div style={{marginBottom:"1px"}}>
                                <button 
                                style = {{backgroundColor : isProductInCart ? 'rgb(19, 148, 16)' : '#d53b3b' }}
                                onClick={()=>{
                                    isProductInCart
                                    ? removeFromCart(product)
                                    : addToCart(product)
                                }}>
                                    {
                                        isProductInCart
                                        ? <RemoveFromCartIcon/>
                                        :<AddToCartIcon/>
                                    }
                                </button>
                        
                            </div>
                        </li>
                    )})
                }
            </ul>
        </main>
    )
}