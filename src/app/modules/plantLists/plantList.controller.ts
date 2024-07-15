import { Request, Response } from "express";
import { plantListServices } from "./plantList.service";



const getAllPlantListsFromDB = async (rq: Request, res: Response) => {
    try {
        const result = await plantListServices.getAllPlantListsFromDB()
        res.status(200).json({
            success: true, 
            message: 'All plant lists fetched successfully',
            data: result,
        })
    } catch (error) {
        console.log(error);
    }
}

const getSingleProductFromDB = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const result = await plantListServices.getSinglePlantsFromDB(id);
      res.status(200).json({
        success: true,
        message: 'Single plant fetched successfully!',
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  };

export const plantListsController = {
    getAllPlantListsFromDB,
    getSingleProductFromDB,
}