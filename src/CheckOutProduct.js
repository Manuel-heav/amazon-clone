import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider'
const CheckOutProduct = (props) => {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: props.id,
        })
    }
    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={props.image}/>
            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{props.title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{props.price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                {
                    Array(props.rating)
                    .fill()
                    .map(() => (
                          <p>⭐️</p>  
                    ))
                }
                </div>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckOutProduct
