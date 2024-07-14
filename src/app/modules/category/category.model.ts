import { model, Schema } from "mongoose";
import { PlantCategory } from "./category.interface";

const plantCategorySchema = new Schema<PlantCategory>({
    categoryName: { type: String, required: true },
    priceRange: { type: String, required: true },
    image: { type: String, required: true },
    description: { type: String, required: true },
  });

  export const PlantCategoryModel = model<PlantCategory>('plantCategory', plantCategorySchema)