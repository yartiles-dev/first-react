import {CartItem} from "./cart.reducer";

export const addItemToCart = (cartItems: CartItem[], cartItemToAdd: CartItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToAdd.id)

    return existingCartItem ? cartItems.map(cartItem => cartItem.id === cartItemToAdd.id ? {
        ...cartItem,
        quantity: cartItem.quantity as number + 1
    } : cartItem) : [...cartItems, {...cartItemToAdd, quantity: 1}]
}

export const removeItemFromCart = (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const existingCartItem = cartItems.find(cartItem => cartItem.id === cartItemToRemove.id)

    return existingCartItem?.quantity===1
        ? cartItems.filter(cartItem => cartItem.id !== existingCartItem?.id)
        : cartItems.map(cartItem => cartItem.id === existingCartItem?.id ? {...cartItem, quantity: cartItem.quantity - 1}: cartItem)
}
