import './Cart.css';
import { useId, useState , useEffect} from "react";
import { CartIcon, ClearCartIcon } from "./Icons";
import { useCart } from '../hooks/useCart';
import { SendCart } from '../components/SendCart';
import { Form } from './Form';
<<<<<<< Updated upstream
/* import { alfajoresChocolate} from "../media/realMedia/alfajoresChocolate.jpeg" */
=======
import { Button, Drawer } from 'antd';

>>>>>>> Stashed changes
function CartItem ({thumbnail , price , title , quantity , addToCart})  {
     return (
        <li>
                   {/*  <img 
                    src={thumbnail}
                    alt = {title}
                    /> */}
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

    const { cart, clearCart, addToCart, sendCart, getTotal } = useCart();
    const [isChecked, setIsChecked] = useState(false);
    const [open, setOpen] = useState(false);
    const [childrenDrawer, setChildrenDrawer] = useState(false);

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    const showChildrenDrawer = () => {
        setChildrenDrawer(true);
    };
    const onChildrenDrawerClose = () => {
        setChildrenDrawer(false);
    };
   
    return (
        <>
<Button type="primary" onClick={showDrawer} className='cart-button' >
             <CartIcon/>
      </Button>
      <Drawer title="Tu compra" width={260}  closable={false} onClose={onClose} open={open} className='cart' style={{backgroundColor : "#ec7c7c" , alignItems : "center" , position: "fixed", display :"block" , height : "100%" , zIndex : "9998" , width:"260px"}}>
    {/* <input id={cartCheckBoxId} type="checkbox" style = {{"display" : "none"}}/> */}
    <div>
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
                    <p>Total: ${cart.total- cart.discounts}</p>
                </label>
                <button
                    style={{ marginTop: "9px", backgroundColor: "rgb(19, 148, 16)" }}
                    onClick={clearCart}
                >
                    <ClearCartIcon/>
                </button>
                <br />
                <br />
                <Button type="primary" onClick={showChildrenDrawer}>
          Two-level drawer
        </Button>
        <Drawer
          title="Two-level Drawer"
          width={320}
          closable={false}
          onClose={onChildrenDrawerClose}
          open={childrenDrawer}
        >
          This is two-level drawer
                <Form
                /* isChecked={isChecked}
                setIsChecked = {setIsChecked} */
                />
        </Drawer>
            
                </div>
        )}
         {cart.cart.length === 0 && 
         <>
            <h1>Horarios de Reparto : </h1> 
            <br></br>
            <p>Lunes a viernes de 09:00 a 19:00hs</p>
            <p>Sabados y Domingos Feria de manjares Laprida esquina Belgrano , Codoba Argentina</p>
         </>
            }
    </div>
    </Drawer>
        </>

    )
}