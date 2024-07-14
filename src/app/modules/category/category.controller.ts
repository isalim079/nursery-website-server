import { Request, Response } from "express";
import { categoryPlantServices } from "./category.service";


const getAllPlantsCategoryFromDB = async (rq: Request, res: Response) => {
    try {
        const result = await categoryPlantServices.getAllPlantsCategoryFromDB()
        res.status(200).json({
            success: true, 
            message: 'Top Banner Plant data fetched successfully',
            data: result,
        })
    } catch (error) {
        console.log(error);
    }
}

export const plantsCategoryControllers = {
    getAllPlantsCategoryFromDB
}