import { getCraftListData, getItemListData, getUniqueItemData } from "../services/service.item.js";

export async function getUniqueItem(req, res) {
  const value = res.locals.data;
  try {
    const data = await getUniqueItemData(value.itemId);
    if (!data) throw new Error();
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
}
export async function getItemList(req, res) {
  const { itemListId } = res.locals.data;
  try {
    const data = await getItemListData(itemListId);
    if (!data) throw new Error();
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
}
export async function getCraftList(req, res) {
  try {
    const data = await getCraftListData();
    if(!data) throw new Error();
    res.send(data);
  } catch (err) {
    res.status(404).send(err);
  }
}