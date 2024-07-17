import { Types } from "mongoose";
import { PlantListModel } from "./plantList.model";
import { PlantList } from "./plantList.interface";

const getAllPlantListsFromDB = async () => {
    const result = await PlantListModel.find();
    return result;
};

const getSinglePlantsFromDB = async (id: string) => {
    const objectId = new Types.ObjectId(id);
    const result = await PlantListModel.findById(objectId);
    return result;
};

const updatePlantDataFromDB = async (id: string, updateInfo: PlantList) => {
    const objectId = new Types.ObjectId(id);
 
    // console.log("Updating Plant with ObjectId:", objectId);
    // console.log("Update Info:", updateInfo);
    
    const updatedData = {
        $set: {
            title: updateInfo.title,
            image: updateInfo.image,
            price: updateInfo.price,
            rating: updateInfo.rating,
            quantity: updateInfo.quantity,
            categoryName: updateInfo.categoryName,
            description: updateInfo.description,
        },
    };
    // console.log(updatedData);

    const result = PlantListModel.findOneAndUpdate(
        { _id: objectId },
        updatedData,
        { new: true }
    );
    // console.log("result", result);
    return result;
};

export const plantListServices = {
    getAllPlantListsFromDB,
    getSinglePlantsFromDB,
    updatePlantDataFromDB,
};
