import {createSelector} from "reselect";
import {ShopGeneric} from "./shop.reducer";

const selectShop = (state): ShopGeneric => state.shop

// enum COLLECTION_ID_MAP { hats = 1, sneakers = 2, jackets = 3, womens = 4, mens = 5 }

export const selectShopItems = createSelector(
    [selectShop],
    (shop) => shop
)

export const selectShopForPreview = createSelector(
    [selectShopItems],
    (shopItems) =>
        //De esta manera c puede convertir un objeto en arreglo donde cada posicion contiene lo q tiene cada etiqueta
        Object.keys(shopItems).map(key => shopItems[key])
)

export const selectShopItem = (shopUrlParam: string) => createSelector(
    [selectShopItems],
    (shop) => shop[shopUrlParam]
)