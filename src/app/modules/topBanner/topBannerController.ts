import { Request, Response } from "express";
import { topBannerPlantServices } from "./topBannerService";

const getAllPlantsFromDB = async (rq: Request, res: Response) => {
    try {
        const result = await topBannerPlantServices.getAllPlantsFromDB()
        res.status(200).json({
            success: true, 
            message: 'Top Banner Plant data fetched successfully',
            data: result,
        })
    } catch (error) {
        console.log(error);
    }
}

export const topBannerPlantDataControllers = {
    getAllPlantsFromDB
}