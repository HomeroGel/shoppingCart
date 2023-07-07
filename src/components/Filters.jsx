import { useContext, useId } from 'react'
import './Filters.css'
import { FiltersContext } from '../context/filters'

// eslint-disable-next-line react/prop-types
export const Filters = () => {

    const {filters, setFilters} = useContext(FiltersContext)
    
    
    //Usa la posicion y el orden en el que se llama el hook.
    const priceFilterId = useId()
    const categoryFilterId = useId()

    

    //Recibo el setFilters de app y actualizo su estado capturando el evento cuando cambia.
    const handleChangeRange = (e) => {
        setFilters(prevState => ({
            ...prevState,
            minPrice: e.target.value
        }))
    }

    const handleChangeCategory = (e) => {
        setFilters(prevState => ({
            ...prevState,
            category: e.target.value
        }))
    }
  
    return (
    <section className="filters">
        <div>
            <label htmlFor={priceFilterId}>Precio a partir de:</label>
            <input 
                type="range"
                id={priceFilterId}
                min= '0'
                max= '1000'
                onChange={handleChangeRange}
                value={filters.minPrice}     
            />
            <span>${filters.minPrice}</span>
        </div>

        <div>
            <label htmlFor={categoryFilterId}>Categoria</label>
            <select id={categoryFilterId} onChange={handleChangeCategory}>
                <option value="all">Todas</option>
                <option value="laptops">Computadoras</option>
                <option value="smartphones">Celulares</option>
            </select>
        </div>
    </section>
  )
}
