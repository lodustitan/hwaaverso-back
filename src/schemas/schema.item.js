import Joi from "joi";

export const getUniqueItemSchema = Joi.object({
    itemId: Joi.number().required(),
});
export const getItemListSchema = Joi.object({
    itemListId: Joi.array().required(),
});