export function calcularResta(quantity , brand) {
    const halfDoz = quantity % 6;
    const totalDoz = quantity % 12;
    const twelve = Math.floor(quantity / 12);
    const six = Math.floor(quantity / 6);
    
    let resta = 0;
    if(brand !== ""){

        //recibir tambien el brand del producto para en caso de no tener descuentos , devolver 0
        if (halfDoz === 0 && totalDoz === 6 && six > 2) {
            // Descuento por cada media docena y docena adicional
            resta += 300  ;
        } else if (halfDoz === 0 && totalDoz === 0) {
            // Descuento por cada docena completa
            resta += 3100 ;
        } else if (halfDoz === 0 && totalDoz === 6) {
            // Descuento por cada media docena con una docena adicional
            resta += 300;
        }
    }else {
        resta = 0
    }
        
    return resta;
};
