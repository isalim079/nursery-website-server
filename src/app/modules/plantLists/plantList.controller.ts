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

  const updatePlantDataFromDB = async(req: Request, res: Response)=> {
    try {
        const { id } = req.params;
        const updateInfo = req.body;

        // console.log("updateInfo: =>", updateInfo);
        // console.log("productId: =>", id);

        const result = await plantListServices.updatePlantDataFromDB(
          id,
          updateInfo,
        );
        res.status(200).json({
          success: true,
          message: 'Plants updated successfully!',
          data: result,
        });
      } catch (error) {
        console.log(error);
      }
}

export const plantListsController = {
    getAllPlantListsFromDB,
    getSingleProductFromDB,
    updatePlantDataFromDB
}