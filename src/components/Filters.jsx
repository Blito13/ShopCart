import './Filters.css';
import { useState , useId} from 'react';
import { useFilters } from '../hooks/useFilters';
export function Filters () {
    const {filters ,setFilters} = useFilters();

    const minPriceFilterId = useId();
    const categoryFilterId = useId();

    const handleChangeMinPrice = (event) =>{
        event.preventDefault();

        setFilters(prevState =>({
            ... prevState,
            minPrice: event.target.value
        }))
    };
    const handleCategory = (event) =>{
        setFilters(prevState=> ({
            ...prevState,
            category:event.target.value
        }))
    };

    return (
        <section className='filters'>
            <div>
                <label htmlFor={minPriceFilterId}>Precio</label>
                <input
                    type = 'range'
                    id =  {minPriceFilterId}
                    min = '0'
                    max = '1000'
                    onChange={handleChangeMinPrice}
                    value = {filters.minPrice}
                />
                <span>{filters.minPrice}</span>
            </div>
            <div>
                <label htmlFor={categoryFilterId}>Categoria</label>
                    <select id={categoryFilterId} onChange={handleCategory}>
                        <option value = 'all'>Todas</option>
                        <option value = 'laptops'>Laptops</option>
                        <option value = 'smartphones'>SmartPhones</option>
                    </select>
            </div>
        </section>
    )
}