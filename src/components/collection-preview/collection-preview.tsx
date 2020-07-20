import React from "react";

import './collection-preview.style.scss'
import CollectionItem from "../collection-items/collection-item";

//para ahorrar codigo html usar emmet abreviation

const CollectionPreview = ({ title, items }) => (
    <div className="collection-preview">
        <h1 className="title"> {title.toUpperCase()} </h1>
        <div className="preview">
            {items
                .filter((item,idx) => idx < 4 )
                .map((item) => (
                    <CollectionItem key={item.id} Item={item}/>
            ))}
        </div>
    </div>
)

export default CollectionPreview