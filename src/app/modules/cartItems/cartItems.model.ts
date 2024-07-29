import { model, Schema } from "mongoose";
import { CartItems } from "./cartItems.interface";

const cartItemsSchema = new Schema<CartItems>({
    plantId: { type: String, required: true },
    title: { type: String, required: true },
    image: { type: String, required: true },
    price: { type: String, required: true },
    rating: { type: Number, required: true },
    quantity: { type: Number, required: true },
    categoryName: { type: String, required: true },
    description: { type: String, required: true },
    isCheckout: { type: Boolean, required: true },
});

const CartItemsModel = model<CartItems>("cartItems", cartItemsSchema);

export default CartItemsModel;
