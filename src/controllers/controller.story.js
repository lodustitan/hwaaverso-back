import { getStoryDialogue } from "../services/service.story.js";

export async function getStory(req, res) {
    const value = res.locals.data;

    try {

        const data = await getStoryDialogue(value.storyId, value.id, value.route);
        if(!data) throw new Error();
        res.send(data);
        
    } catch(err) {
        res.status(404).send(err);
    }
} 