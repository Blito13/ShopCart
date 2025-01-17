import "./Products.css";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";
import { useCart } from "../hooks/useCart";
import { useProducts } from "../hooks/useProducts";
import { useEffect, useState } from "react";


export function Products () {
    const {addToCart ,cart,  total, removeFromCart ,clearCart} = useCart();
    const {state, getProd} =  useProducts();

   
    useEffect(()=>{
        if(!state.length){
                getProd()
            }
        
    },[])
    
    const checkProductInCart = product => {
 
        return cart.cart.some(item => item.id === product.id)
    }
    return(
        <main className='products'>
 
            <ul>
               { 
                    state.length>1?state.map(product =>{
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
             :<img src={"https://media.giphy.com/media/l3vR9zT3ySDv5MKeQ/giphy.gif?cid=790b7611yvcbeutud6383wt64vf08mbj8782zhfyuiygf8w6&ep=v1_gifs_search&rid=giphy.gif&ct=g"}alt="breve descripcion" style={{height:"400px", width:"100%"}}></img> }
            </ul>
        </main>
    )
}