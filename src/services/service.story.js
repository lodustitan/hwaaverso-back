import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const characters = require("../../pkgs/story/characters.json"); 
const history_1 = require("../../pkgs/story/1_aniversario.json");

export async function getStoryDialogue(storyId, id, route) {
  let returnData;
  const stories = {
    1: {
      data: history_1,
    }
  }

  if (stories[storyId]) {
    const data = stories[storyId].data;

    if (!data) throw new Error("Service Story Error: storyId not exists.");
    else {
      for (let el of data.scenes) {
        if (el.id === id) {
          if (!el.route) {
            returnData = el;
          } else if (el.route === route) {
            returnData = el;
          }
        }
      }
    }
  }
  for( let el of returnData.textSequence) {
    for( let person of characters.characters ) {
      if(person.id === el.speakerId) {
        el.speakerInfo = person
        break;
      } else {
        el.speakerInfo = null;
      }
    }
  }
  return returnData;
}