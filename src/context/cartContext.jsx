import { createContext } from "react";
import { useCartReducer } from "../hooks/useCartReducer";

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    
    const {state, addToCart, removeToCart, clearCart} = useCartReducer()

    //TODOS ESTOS EN CASO DE USAR EL USECONTEXT

    // const addToCart = product => {
    //     //setCart([...cart, product]) Forma sencilla de hacerlo.

    //     if (productInCartIndex >= 0) {
    //         //Una forma de hacerlo. strucCln crea una copia del array (con map o slice tmb se podria hacer.)
    //         const newCart = structuredClone(cart)
    //         newCart[productInCartIndex].quantity += 1
    //         return newCart
    //     }
    
    //     //checkear si el producto ya esta en el carrito.
    //     const productInCartIndex = cart.findIndex(item => item.id === product.id)

    //     //Si no esta en el carrito
    //     setCart(prevState => (
    //         [...prevState,
    //         {
    //             ...product,
    //             quantity: 1
    //         }]
    //     ))
    // }

    // const removeToCart = product => {
    //     setCart(prevState => prevState.filter(item => item.id !== product.id))
    // }

    // const clearCart = () => {
    //     setCart([])
    // }

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            removeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}