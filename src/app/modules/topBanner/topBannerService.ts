import { TopBannerPlantDataModel } from "./topBanner.model"

const getAllPlantsFromDB = async () => {
    const result = await TopBannerPlantDataModel.find()
    return result
}

export const topBannerPlantServices = {
    getAllPlantsFromDB
}