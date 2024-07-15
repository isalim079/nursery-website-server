import express from 'express'
import { cartItemsController } from './cartItems.controller'

const router = express.Router()

router.post('/cartItems', cartItemsController.createAddToCarts)
router.get('/cartItems', cartItemsController.getCartItemsFromDB)

export const cartItemsRoutes = router