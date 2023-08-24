import { getMonsterSchema } from "../schemas/schema.map.js";

export function getMonsterMiddleware(req, res, next) {
  let monsterId = Number(req.params.monsterId);

  try {
    const { error, value } = getMonsterSchema.validate({
      monsterId: monsterId,
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