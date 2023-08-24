import Joi from "joi";

export const getMonsterSchema = Joi.object({
    monsterId: Joi.number().required(),
}) 