import './Products.css'
import {AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import { useCart } from '../hooks/useCart'



// eslint-disable-next-line react/prop-types
export const Products = ({ products }) => {

    const {addToCart, cart, removeToCart} = useCart()

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }


  return (
    <main className='products'>
        <ul>
            {/* eslint-disable-next-line react/prop-types */}
            {products.map(product => {
                const isProductInCart = checkProductInCart(product)
                return(
                <li key={product.id}>
                    <img 
                        src={product.thumbnail} 
                        alt={product.title} 
                    />
                    <div>
                        <strong>{product.title}</strong>  - $ {product.price}
                    </div>
                    <div>
                        <button
                            style={{backgroundColor: isProductInCart ? '#F8312F' : '#09f'}} 
                            onClick={()=> {
                                isProductInCart 
                                    ? removeToCart(product) 
                                    : addToCart(product)
                                }}>
                            {
                                isProductInCart
                                    ? <RemoveFromCartIcon/> 
                                    : <AddToCartIcon/>
                            }
                        </button>
                    </div>
                </li>)
            })}
        </ul>
    </main>
  )
}
