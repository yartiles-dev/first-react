import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import CartItems from "../cart-item/cart-item.component";

import { withRouter } from 'react-router-dom'

import './cart-dropdown.style.scss'
import {CartItem} from "../../redux/cart/cart.reducer";
import {connect} from "react-redux";
import {selectCartItems} from "../../redux/cart/cart.selectors";
import {createStructuredSelector} from "reselect";

import { toggleCartHidden } from "../../redux/cart/cart.actions";

const CartDropDown = ({ cartItems, history, dispatch }: {cartItems: CartItem[], history: any, dispatch: any}) => (
    <div className="cart-dropdown">
        <div className="cart-items">
            {
                cartItems.length ?
                cartItems
                .map((cartItem) => (
                    <CartItems key={cartItem.id} item={cartItem}/>
                )) : (
                        <span className="empty-message"> Your cart is empty </span>
                    )
            }
        </div>
        <CustomButton onClick={()=>{history.push('/checkout'); dispatch(toggleCartHidden())}} inverted={false} isGoogleSignIn={false}>GO TO CHECKOUT</CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown))