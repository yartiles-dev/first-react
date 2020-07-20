import React from "react";

import './cart-item.style.scss'
import {CartItem} from "../../redux/cart/cart.reducer";

const CartItems = ({ item: {imageUrl, name, price, quantity} }: {item: CartItem}) => (
    <div className="cart-item">
        <img src={imageUrl} alt=""/>
        <div className="item-details">
            <span className="name">{name}</span>
            <span className="price">{quantity} x ${price}</span>
        </div>
    </div>
)

export default CartItems