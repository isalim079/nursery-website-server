import { Types } from "mongoose";
import { PlantListModel } from "./plantList.model";

const getAllPlantListsFromDB = async () => {
    const result = await PlantListModel.find();
    return result;
};

const getSinglePlantsFromDB = async (id: string) => {
    const objectId = new Types.ObjectId(id)
    const result = await PlantListModel.findById(objectId)
    return result
}



export const plantListServices = {
    getAllPlantListsFromDB,
    getSinglePlantsFromDB,
};
