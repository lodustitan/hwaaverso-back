import { Router } from "express";
import { getCraftList, getItemList, getUniqueItem } from "../controllers/controller.item.js";
import { getItemListMiddleware, getUniqueItemMiddleware } from "../middlewares/middleware.item.js";

const route = Router();

route
  .get('/craft', getCraftList)
  .get('/:itemId', getUniqueItemMiddleware, getUniqueItem)
  .post('/', getItemListMiddleware, getItemList);


export default route;