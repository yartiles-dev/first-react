import React from "react";

import './category.style.scss'

import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectShopItem} from "../../redux/shop/shop.selectors";
import {Collection} from "../shop/shop.component";
import CollectionItem from "../../components/collection-items/collection-item";
import {CartItem} from "../../redux/cart/cart.reducer";

const CategoryPage = ({ shop }: {shop: Collection}) => {
    const { title, items } = shop
    return (
        <div className="category">
            <h2 className='title'> { title } </h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} Item={item as CartItem} />
                    ))
                }
            </div>
        </div>
    )
}

//En el segundo parametro de la funcion coge las propiedades q tiene hasta ahora el componente
const mapStateToProps = (state, { match }) => createStructuredSelector({
        shop: selectShopItem(match.params.categoryId)
    })

export default connect(mapStateToProps)(CategoryPage)