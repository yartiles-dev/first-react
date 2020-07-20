import React from "react";
import {createStructuredSelector} from "reselect";
import {selectShopForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

import './collections-overview.style.scss'
import CollectionPreview from "../collection-preview/collection-preview";
import {Collection} from "../../pages/shop/shop.component";

const CollectionOverview = ({shop}: { shop: Collection[] }) => (
    <div className='collections-overview'>
        {shop.map(({id, ...otherProps}) => (
            <CollectionPreview key={id} {...otherProps}/>
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    shop: selectShopForPreview
})

export default connect(mapStateToProps)(CollectionOverview)