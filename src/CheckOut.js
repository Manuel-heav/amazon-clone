import React from 'react'
import { useStateValue } from './StateProvider'
import './Checkout.css'
import CheckOutProduct from './CheckOutProduct.js'
const CheckOut = () => {

    const [{ basket }] = useStateValue();
    return (
        <div className="checkout">
            <div className="checkout__left">
            <img className="checkout__img "src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"/>
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Basket Is Empty</h2>
                        <p>You have no items in your basket. Please click "Add to cart" button on the item you want to purchase</p>
                    </div>
                ): (
                    <div>
                        <h2 className="checkout__title">Your Shopping Basket</h2>
                        {basket?.map(item => (
                            <CheckOutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                )
            }
            {
                basket.length > 0 && (
                    <div className="checkout__right">
                            <h1>Subtotal</h1>
                        {/* <Subtotal /> */}
                    </div>
                )
            }
            </div>
        </div>
    )
}

export default CheckOut
