//useContext: 

//Usar cuando tenemos estados chicos o que cambien con poca frecuencia, por ej: la sesion de usuario

import { createContext, useState } from "react";


// 1. Contexto creado.  Este es el contexto que hay que consumir
export const FiltersContext = createContext()


// 2. Crear el provider para proveer el acceso al contexto.
// eslint-disable-next-line react/prop-types
export const FiltersProvider = ({ children }) => {
    const [filters, setFilters] = useState({
        category: 'all',
        minPrice: 0
    })
    
    return (
        <FiltersContext.Provider value={{
            //El valor que va a tener nuestro contexto
            
            filters,
            setFilters
        }}>
            {children}
        </FiltersContext.Provider>
    )
}
// 3. El tercer paso seria consumirlo.