import { getItemListSchema, getUniqueItemSchema } from "../schemas/schema.item.js";

export async function getUniqueItemMiddleware(req, res, next) {
  const itemId = Number(req.params.itemId);

  try {
    const { error, value } = getUniqueItemSchema.validate({
      itemId: itemId,
    }, { abortEarly: false });
    if (error) return res.status(404).send({ error: error.details.map(el => el.message) });
    if (value) {
      res.locals.data = value;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}
export async function getItemListMiddleware(req, res, next) {
  const { itemListId } = req.body;

  try {
    const { error, value } = getItemListSchema.validate({
      itemListId: itemListId,
    }, { abortEarly: false });
    if (error) return res.status(404).send({ error: error.details.map(el => el.message) });
    if (value) {
      res.locals.data = value;
      next();
    }
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
}