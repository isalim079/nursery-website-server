import { Request, Response } from "express";
import { cartItemsServices } from "./cartItems.Service";
import { PlantListModel } from "../plantLists/plantList.model";
import CartItemsModel from "./cartItems.model";

const createAddToCarts = async (req: Request, res: Response) => {
    const {
        plantId,
        title,
        image,
        price,
        rating,
        quantity,
        categoryName,
        description,
        isCheckout
    } = req.body;

    const findPlantId = await PlantListModel.findById(plantId);
    const existingItem = await CartItemsModel.findOne({ plantId });

    // console.log(existingItem);

    if (existingItem) {
        const newQuantity = existingItem.quantity + quantity;
        if (newQuantity > findPlantId!.quantity) {
            return res
                .status(400)
                .json({ message: "Cannot add more than available stock" });
        }
        existingItem.quantity = newQuantity;
        await existingItem.save();

        // Decrease plant quantity in PlantListModel
        findPlantId!.quantity -= quantity;
        await findPlantId!.save();

        return res.status(200).json(existingItem);
    }

    const newItem = new CartItemsModel({
        plantId,
        title,
        image,
        price,
        rating,
        quantity,
        categoryName,
        description,
        isCheckout
    });

    await newItem.save();
    res.status(201).json(newItem);

    findPlantId!.quantity -= quantity;
    await findPlantId!.save();
};

const getCartItemsFromDB = async (req: Request, res: Response) => {
    try {
        const result = await cartItemsServices.getPlantsFromCart();
        res.status(200).json({
            success: true,
            message: "Cart items fetched successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};





export const cartItemsController = {
    createAddToCarts,
    getCartItemsFromDB,

};
