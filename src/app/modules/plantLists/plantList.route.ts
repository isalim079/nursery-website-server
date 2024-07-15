import express from 'express'
import { plantListsController } from './plantList.controller'


const router = express.Router()

router.get('/allPlants', plantListsController.getAllPlantListsFromDB)
router.get('/plantDetails/:id', plantListsController.getSingleProductFromDB)

export const plantListsRoutes = router