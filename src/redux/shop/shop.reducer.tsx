import {Collection} from "../../pages/shop/shop.component";
import SHOP_DATA_PRODUCTION from "./shop.data.production";
import SHOP_DATA_DEVELOPMENT from "./shop.data.development";

export interface ShopGeneric {
    hats: Collection;
    sneakers: Collection;
    jackets: Collection;
    womens: Collection;
    mens: Collection
}

const INITIAL_STATE: ShopGeneric = process.env.NODE_ENV==='production' ? SHOP_DATA_PRODUCTION : SHOP_DATA_DEVELOPMENT

const shopReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state
    }
}

export default shopReducer