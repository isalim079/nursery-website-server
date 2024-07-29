import express from "express";
import { plantListsController } from "./plantList.controller";

const router = express.Router();

router.get("/allPlants", plantListsController.getAllPlantListsFromDB);
router.get("/plantDetails/:id", plantListsController.getSingleProductFromDB);
router.put("/allPlants/:id", plantListsController.updatePlantDataFromDB);
router.delete("/allPlants/:id", plantListsController.deletePlantDataFromDB);
router.post('/allPlants', plantListsController.createPlantsDataIntoDB)

export const plantListsRoutes = router;
