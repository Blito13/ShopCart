import './Cart.css';
import { useId, useState , useEffect} from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';
import { SendCart } from '../components/SendCart';
import { Form } from './Form';
/* import { alfajoresChocolate} from "../media/realMedia/alfajoresChocolate.jpeg" */
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
                        <button style = {{backgroundColor : "rgb(19, 148, 16)"}} onClick={addToCart}>+</button>
                    </footer>
                </li>
     )
}
export function Cart () {
    const cartCheckBoxId = useId();
    const {cart , clearCart , addToCart , sendCart ,getTotal } = useCart();
    const [isChecked, setIsChecked] = useState(false);
    
    
  /*   const [total , setTotal] = useState(0); */

/*    console.log(cart , total , clearCart) */

    return (
        <>
             <label className="cart-button" htmlFor={cartCheckBoxId}>
             <CartIcon/>
            </label>
   { <input id={cartCheckBoxId} type="checkbox"/>}
    <aside className="cart">
        <ul>
            {cart.cart.map(product => (
                <CartItem
                    key={product.id}
                    addToCart={() => addToCart(product)}
                    {...product}
                />
            ))}
        </ul>
        {cart.cart.length > 0 && (
            <div>
                <label>
                    <p>Total: ${cart.total}</p>
                </label>
                <button
                    style={{ marginTop: "9px", backgroundColor: "rgb(19, 148, 16)" }}
                    onClick={clearCart}
                >
                    <ClearCartIcon/>
                </button>
                <button onClick={() => setIsChecked(!isChecked)}>Realizar Compra</button>
                <Form
                isChecked={isChecked}
                setIsChecked = {setIsChecked}
                />
                </div>
        )}
        {cart.cart.length === 0 && <h1>No products yet</h1>}
    </aside>
        </>
    )
}