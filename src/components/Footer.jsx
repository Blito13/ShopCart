import { useFilters } from '../hooks/useFilters';
import { useCart } from '../hooks/useCart';
import React from "react";
import styles from "./Footer.module.css";

import * as AllImages from '../media/realMedia/indexMedia';
import { Link  } from "react-router-dom"; 

const {whatsapp , facebook , instagram , email , twitter} = AllImages;

export  function Footer () {
    const {cart } = useCart();
    const {filters} = useFilters();

   
    return (
        <footer>
        <div className={styles.container}>
    <div className={styles.innercontainer}>
        <div className={styles.innercontainer2}>
            <h3 className={styles.bluetitle}>Amasocriando Store</h3>
            <p className={styles.texto}>Almacen de pasteleria integral vegana Cordoba Argentina</p>
        </div>
        <ul className={styles.sociallinks}>
        <h3 className={styles.footertitles}>Contact</h3>
        <div className={styles.lista_resp}>
            <li>
                <img src={facebook} className={styles.icono}/>
                <a  className ={styles.links}href = "https://www.facebook.com/profile.php?id=100050808798787">Facebook
                </a>
                </li>
            <li>
                <img src={whatsapp} className={styles.icono}/>
                <a  className ={styles.links}href = "https://wa.me/3515935709">Whatsapp
                </a>
                </li>
            <li>
                <img src={instagram} className={styles.icono}/>
                <a  className ={styles.links}href = "https://instagram.com/amasocriando">Istagram
                </a>
                </li>
            
        </div> 
        </ul>
    </div>
    <div className={styles.copyright}>
        <p>Copyright &copy; 2023 by Amasocriando. All rights reserved</p>
    </div>  
  </div>
        </footer>
    )
}