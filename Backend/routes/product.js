import express from 'express';
import {showAllAccessories, showAllScarves, showProduct} from '../controllers/product.controller.js'

const router = express.Router();

router.get("/get-scarves",showAllScarves)
router.get("/get-accessories",showAllAccessories)
router.post("/get-product",showProduct)

export default router;