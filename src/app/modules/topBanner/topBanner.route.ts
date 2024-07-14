import express from 'express'
import { topBannerPlantDataControllers } from './topBannerController'
const router = express.Router()

router.get('/topBannerPlantData', topBannerPlantDataControllers.getAllPlantsFromDB)

export const topBannerPlantDataRoutes = router