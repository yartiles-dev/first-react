import React from "react";

import CustomButton from "../custom-button/custom-button.component";
import {connect} from "react-redux";
import {addItem} from "../../redux/cart/cart.actions";

import './collection-item.style.scss'
import {CartItem} from "../../redux/cart/cart.reducer";

const CollectionItem = ({Item, addItem}: {Item: CartItem, addItem: any}) => {
    const {name, price, imageUrl} = Item
    return (
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage: `url(${imageUrl})`}}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>

            <CustomButton onClick={()=> addItem(Item)} className='custom-button' inverted={true} isGoogleSignIn={false}> Add to Cart </CustomButton>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addItem: (item: CartItem) => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)

