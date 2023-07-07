import { useReducer } from "react"
import { cartReducer, initialState } from "../reducers/cartReducer"

export const useCartReducer = () => {
    const [state, dispatch] = useReducer(cartReducer, initialState)

    const addToCart = product => dispatch({
        type: 'ADD_TO_CART',
        payload: product
    })

    const removeToCart = product => dispatch({
        type: 'REMOVE_TO_CART',
        payload: product
    })

    const clearCart = () => dispatch({type: 'CLEAR_CART'})

    return {state, addToCart, removeToCart, clearCart}
}
