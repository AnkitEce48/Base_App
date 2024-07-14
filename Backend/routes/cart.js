import express from "express";
import { deleteItem, placeCart, showCart } from "../controllers/cart.controller.js";
 
const router = express.Router();
 
router.post('/place-cart',placeCart)
router.post('/show-cart',showCart)
router.delete('/delete-item/:id/:uId',deleteItem)
 
export default router;
