import {Filters} from './Filters.jsx';
import * as AllImages from '../media/realMedia/indexMedia';

export function Header () {
    return (
        <header style ={{display : "flex" , flexDirection :"column" , justifyContent : "center" , alignItems : "center"}}>
            <h1>
               <img src={AllImages.logo} style = {{width : "200px"}} alt="" />
            </h1>
               <img src={AllImages.veganSpan} style = {{width : "100px", /* marginTop : "50px" */}} alt="" />
            <h1>
               <img src={AllImages.logoSpan} style = {{width : "200px", justifyContent : "center" , alignItems : "center"/* marginTop : "50px" */}} alt="" />
            </h1>
            {/* <Filters/> */}
        </header>
    )
};