const mapsData = require("../../pkgs/story/maps.json"); 
const monstersData = require("../../pkgs/story/monsters.json"); 

export async function getMapsData() {
  const reference = mapsData.maps;

  for (const el of reference) {
    for (const el2 of el.subLocals) {
      for (const el3 of el2.research) {
        const finded = await getMonsterById(el3.monsterId);
        if(finded) {
          finded.chanceToAppear = el3.chance;
          el3.monsterId = finded.monsterId;
          el3.name = finded.name;
          el3.sprite = finded.sprite;
          el3.status = finded.status;
          el3.loot = finded.loot;
          el3.rewards = finded.rewards
        }
      }
    }
  }

  return reference;
}
export async function getMonsterById(id) {
  for (const iterator of monstersData.monsters) {
    if(iterator.monsterId === id) return iterator
  }
}