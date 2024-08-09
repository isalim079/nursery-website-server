import { Request, Response } from "express";
import { categoryPlantServices } from "./category.service";

const getAllPlantsCategoryFromDB = async (rq: Request, res: Response) => {
    try {
        const result = await categoryPlantServices.getAllPlantsCategoryFromDB();
        res.status(200).json({
            success: true,
            message: "All category fetched successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const createAllPlantsCategoryIntoDB = async (req: Request, res: Response) => {
    try {
        const plantsCategoryData = req.body;
        const result =
            await categoryPlantServices.createAllPlantsCategoryIntoDB(
                plantsCategoryData
            );
        res.status(200).json({
            success: true,
            message: "Category created successfully",
            data: result,
        });
    } catch (error) {
        console.log(error);
    }
};

const deleteCategoryDataFromDB = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const result = await categoryPlantServices.deletePlantCategoryFromDB(id);

        if (result.deletedCount === 1) {
            res.status(200).json({
                success: true,
                message: "Product deleted successfully!",
                data: null,
            });
        }
    } catch (error) {
        console.log(error);
    }
};

export const plantsCategoryControllers = {
    getAllPlantsCategoryFromDB,
    createAllPlantsCategoryIntoDB,
    deleteCategoryDataFromDB,
};
