import express from 'express'
import { plantsCategoryControllers } from './category.controller'

const router = express.Router()

router.get('/plantCategories', plantsCategoryControllers.getAllPlantsCategoryFromDB)
router.post('/plantCategories', plantsCategoryControllers.createAllPlantsCategoryIntoDB)
router.delete("/plantCategories/:id", plantsCategoryControllers.deleteCategoryDataFromDB);

export const plantsCategoryRoutes = router