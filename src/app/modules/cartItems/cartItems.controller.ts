import { Request, Response } from "express";
import { cartItemsServices } from "./cartItems.Service";

const createAddToCarts = async (req: Request, res: Response) => {
    try {
        const cartItems = req.body;
        const result = await cartItemsServices.addToCart(cartItems);
        res.status(200).json({
            success: true,
            message: "Added to cart successfully!",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const getCartItemsFromDB = async (rq: Request, res: Response) => {
    try {
        const result = await cartItemsServices.getPlantsFromCart()
        res.status(200).json({
            success: true, 
            message: 'Cart items fetched successfully',
            data: result,
        })
    } catch (error) {
        console.log(error);
    }
}

export const cartItemsController = {
    createAddToCarts,
    getCartItemsFromDB
}
