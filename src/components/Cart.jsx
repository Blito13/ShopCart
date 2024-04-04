import './Cart.css';
import { useId, useState , useEffect} from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';
import { SendCart } from '../components/SendCart';

function CartItem ({thumbnail , price , title , quantity , addToCart})  {
     return (
        <li>
                    <img 
                    src={thumbnail}
                    alt = {title}
                    />
                    <div>
                        <strong>
                           {title}
                        </strong> - ${price}
                    </div>
                    <footer>
                        <small>
                            Qty:{quantity}
                        </small>
                        <button onClick={addToCart}>+</button>
                    </footer>
                </li>
     )
}
export function Cart () {
    const cartCheckBoxId = useId();
    const {cart , total, clearCart , addToCart , sendCart ,getTotal } = useCart();
    
  /*   const [total , setTotal] = useState(0); */

   console.log(total )
    return (
        <>
        <label className="cart-button" htmlFor={cartCheckBoxId}>
            <CartIcon/>
        </label>
        <input id = {cartCheckBoxId} type = "checkbox"/>
        <aside className="cart">
            <ul>
                {cart.map(product => (
                  /*   handleTotal(product.price * product.quantity) */
                    <CartItem
                    key={product.id}
                    addToCart={()=>addToCart(product)}
                    {...product}
                    />
                    )
                    )
                    }
            </ul>
                
                {cart.length > 0 
                ?<SendCart
                 
                ></SendCart>
                :<h1>No products yet</h1>
                }
           <div></div>

                
                
            <button onClick={clearCart}>
                <ClearCartIcon/>
            </button>
        </aside>
        </>
    )
}