import {Filters} from './Filters.jsx';
/* import * as AllImages from '../media/realMedia/indexMedia'; */

export function Header () {
    return (
        <header style ={{display : "flex" , flexDirection :"column" , justifyContent : "center" , alignItems : "center"}}>
            <h1>
               <img src="https://drive.google.com/thumbnail?id=1GXa7Y71l4lqZ2ut0sFciy3A2NIPP1K2I" style = {{width : "200px" , filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            </h1>
               <img src="https://drive.google.com/thumbnail?id=1io6NiYSFCdB4iQjuWpE5tEZ5wefaPui4" style = {{width : "100px" , filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            <h1>
               <img src="https://drive.google.com/thumbnail?id=1NMnPrKIzbdZ-RftrbLAeYRetp4WHS_pK" style = {{width : "200px", justifyContent : "center" , alignItems : "center" ,filter:"brightness(1.1)", mixBlendMode :"multiply"}} alt="" />
            </h1>

        </header>
    )
};