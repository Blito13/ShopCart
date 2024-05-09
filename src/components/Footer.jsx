import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';
import React from "react";
import "./Footer.css";

import * as AllImages from '../media/realMedia/indexMedia';

const {whatsapp , facebook , instagram , email , twitter} = AllImages;

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
                <img src={facebook} className="icono"/>
                <a  className ="links"href = "https://www.facebook.com/profile.php?id=100050808798787">Facebook
                </a>
                </li>
            <li>
                <img src={whatsapp} className="icono"/>
                <a  className ="links"href = "https://wa.me/3515935709">Whatsapp
                </a>
                </li>
            <li>
                <img src={instagram} className="icono"/>
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