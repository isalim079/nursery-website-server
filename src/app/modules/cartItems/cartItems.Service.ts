import { CartItems } from "./cartItems.interface";
import CartItemsModel from "./cartItems.model";

const addToCart = async(plantData: CartItems) => {
    const result = await CartItemsModel.create(plantData)
    return result
}

const getPlantsFromCart = async() => {
    const result = await CartItemsModel.find()
    return result
}

export const cartItemsServices = {
    addToCart,
    getPlantsFromCart,
}