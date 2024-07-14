import { PlantCategoryModel } from "./category.model"


const getAllPlantsCategoryFromDB = async () => {
    const result = await PlantCategoryModel.find()
    return result
}

export const categoryPlantServices = {
    getAllPlantsCategoryFromDB
}