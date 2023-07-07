import { createContext, useState } from "react";

export const CartContext = createContext()

// eslint-disable-next-line react/prop-types
export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])

    const addToCart = product => {
        //setCart([...cart, product]) Forma sencilla de hacerlo.
        console.log(product)
        //checkear si el producto ya esta en el carrito.

        const productInCartIndex = cart.findIndex(item => item.id === product.id)

        if (productInCartIndex >= 0) {
            //Una forma de hacerlo. strucCln crea una copia del array (con map o slice tmb se podria hacer.)
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        //Si no esta en el carrito

        setCart(prevState => (
            [...prevState,
            {
                ...product,
                quantity: 1
            }]
        ))
    }

    const removeToCart = product => {
        setCart(prevState => prevState.filter(item => item.id !== product.id))
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeToCart
        }}>
            {children}
        </CartContext.Provider>
    )
}