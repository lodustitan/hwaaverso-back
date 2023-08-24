import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const craft = require("../../pkgs/items/craft.json"); 
const items = require("../../pkgs/items/items.json");

const serviceRoute = 'Item' 

export async function getUniqueItemData(itemId) {
  if (!itemId) throw new Error(`Service ${serviceRoute} Error: itemId not exists.`);

  for (const eli of items.items) {
    if(eli.itemId === itemId) {
      return eli;
    }
  }
}
export async function getItemListData(listItemId) {
  if (!Array.isArray(listItemId)) throw new Error(`Service ${serviceRoute} Error: listItemId not is iterable, it must be an array.`);
  const returneditemList = [];

  for (const el of listItemId) {
    for (const eli of items.items) {
      if(el.itemId === eli.itemId) {
        if(eli.count) eli.count = el.count;
        returneditemList.push(eli)
      }
    }
  }
  return returneditemList;
}
export async function getCraftListData() {
  if (!craft) throw new Error(`Service ${serviceRoute} Error: craft not exists.`);
  const returndCraftList = craft.craft;

  for (const el of returndCraftList) {
    for (const eli of el.listCraft) {
      for (const ely of eli.itemsCost) {
        for (const elu of items.items) {
          if(eli.itemId === elu.itemId) { eli.itemData = elu }
          if(ely.itemId === elu.itemId) { ely.itemData = elu }
        }
      }
    }
  }
  return returndCraftList;
}
