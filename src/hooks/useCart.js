import { useContext } from "react";
import { CartContext } from "../context/cartContext";


export const useCart = () => {
    const contextCart = useContext(CartContext)

    if(contextCart === undefined){
        throw new Error('useCart no esta proveido para ser utilizado aqui.')
    }

    return contextCart
}