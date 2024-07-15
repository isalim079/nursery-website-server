import { model, Schema } from "mongoose";
import { PlantList } from "./plantList.interface";

const plantListSchema = new Schema<PlantList>({
    image: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    description: { type: String, required: true },
    rating: { type: Number, required: true },
    quantity: { type: Number, required: true },
    categoryName: { type: String, required: true }
})

export const PlantListModel = model<PlantList>('plantLists', plantListSchema)