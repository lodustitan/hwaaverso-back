import { getMapsData, getMonsterById } from "../services/service.map.js";

export async function getMaps(req, res) {
  try {
    const data = await getMapsData();
    if (!data) throw new Error();
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
}
export async function getMonster(req, res) {
  const value = res.locals.data;
  try {
    const data = await getMonsterById(value.monsterId);
    if (!data) throw new Error();
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
}