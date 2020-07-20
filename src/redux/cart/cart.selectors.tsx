import {createSelector} from "reselect";
import {CartItem} from "./cart.reducer";

const selectCart = state => state.cart

export const selectCartItems = createSelector(
    [selectCart],
    ({cartItems}: {cartItems: CartItem[]} ) => cartItems
)

export const selectCartHidden = createSelector(
    [selectCart],
    ({hidden}: {hidden: boolean}) => hidden
)

export const selectCartItemsCount = createSelector(
    [selectCartItems],
    (cartItems) => cartItems.reduce((acumulatedQuantity: number, {quantity}: CartItem) => acumulatedQuantity + quantity, 0)
)

export const selectCartTotal = createSelector(
    [selectCartItems],
    (cartItems ) => cartItems.reduce((acumulatedTotal: number, {price, quantity}: CartItem) => acumulatedTotal + price * quantity, 0)
)