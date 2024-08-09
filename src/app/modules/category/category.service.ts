import { Types } from "mongoose"
import { PlantCategory } from "./category.interface"
import { PlantCategoryModel } from "./category.model"


const getAllPlantsCategoryFromDB = async () => {
    const result = await PlantCategoryModel.find()
    return result
}

const createAllPlantsCategoryIntoDB = async (plantCategories: PlantCategory) => {
    const result = await PlantCategoryModel.create(plantCategories)
    return result
}

const deletePlantCategoryFromDB = async(id: string) => {
    const objectId = new Types.ObjectId(id)
    const result = await PlantCategoryModel.deleteOne(objectId)
    return result
}

export const categoryPlantServices = {
    getAllPlantsCategoryFromDB,
    createAllPlantsCategoryIntoDB,
    deletePlantCategoryFromDB
}