import { Router } from "express";
import { getMaps, getMonster } from "../controllers/controller.map.js";
import { getMonsterMiddleware } from "../middlewares/middleware.map.js";

const route = Router();

route
  .get('/', getMaps)
  .get('/:monsterId', getMonsterMiddleware, getMonster);

export default route;