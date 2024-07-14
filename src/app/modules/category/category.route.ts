import express from 'express'
import { plantsCategoryControllers } from './category.controller'

const router = express.Router()

router.get('/plantCategories', plantsCategoryControllers.getAllPlantsCategoryFromDB)

export const plantsCategoryRoutes = router