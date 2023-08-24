import Joi from "joi";

export const getDialogueSchema = Joi.object({
    id: Joi.number().required(),
    route: Joi.number().allow(null).required(),
    storyId: Joi.number().required(),
}) 