import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';
import React from "react";
import "./Footer.css";

/* import * as AllImages from '../media/realMedia/indexMedia'; */
/* 
const {whatsapp , facebook , instagram , email , twitter} = AllImages;
 */
export  function Footer () {
    const {cart } = useCart();
    const {filters} = useFilters();

   
    return (
        <footer className='footer'>
        
        <span >
            <h3 className="bluetitle">Amasocriando Store</h3>
            <p className="texto">Almacen de pasteleria integral vegana Cordoba Argentina</p>
        </span>
        <ul >
        <h3 >Contacto</h3>
        <div >
            <li>
                <img src="https://drive.google.com/thumbnail?id=1mqhfVJ9rVTGd2FZ0eiYd0zpZAvxheA-1" className="icono"/>
                <a  className ="links"href = "https://www.facebook.com/profile.php?id=100050808798787">Facebook
                </a>
                </li>
            <li>
                <img src="https://drive.google.com/thumbnail?id=18RtB22BRw0vN7KoN7OdXsTJDPRKnqE1Y" className="icono"/>
                <a  className ="links"href ={`https://wa.me${import.meta.env.VITE_APP_NMBR}`}>Whatsapp
                </a>
                </li>
            <li>
                <img src="https://drive.google.com/thumbnail?id=1zVtWYGNkHF6LOu2dxmVsyHOkzsD1gMSc" className="icono"/>
                <a  className ="links" href = "https://instagram.com/amasocriando">Istagram
                </a>
                </li>
            
        </div> 
        </ul>
   
    <div>
        <p>Copyright &copy; 2023 by Amasocriando. All rights reserved</p>
    </div>  
  
        </footer>
    )
}