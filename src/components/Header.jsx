import {Filters} from './Filters.jsx';
import * as AllImages from '../media/realMedia/indexMedia';

export function Header () {
    return (
        <header style ={{display : "flex" , flexDirection :"column" , justifyContent : "center" , alignItems : "center"}}>
            <h1>
               <img src={AllImages.logo} style = {{width : "200px" , filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            </h1>
               <img src={AllImages.veganSpan} style = {{width : "100px" , filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            <h1>
               <img src={AllImages.logoSpan} style = {{width : "200px", justifyContent : "center" , alignItems : "center" ,filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            </h1>

        </header>
    )
};