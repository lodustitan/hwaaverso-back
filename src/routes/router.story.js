import { Router } from "express";
import { getStory } from "../controllers/controller.story.js";
import { getStoryMiddleware } from "../middlewares/middleware.story.js";

const route = Router();

route.post('/', getStoryMiddleware, getStory);

export default route;