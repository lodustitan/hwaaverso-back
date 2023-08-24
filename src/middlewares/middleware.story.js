import { getDialogueSchema } from "../schemas/schema.story.js";

export function getStoryMiddleware(req, res, next) {
    const body = req.body;

    try {
        const { error, value } = getDialogueSchema.validate({ 
            storyId: body.storyId,
            id: body.id,
            route: body.route,
        }, {abortEarly: false});
        if(error) return res.status(404).send({error: error.details.map(el => el.message)});
        if(value) {
            res.locals.data = value;
            next();
        }
    } catch (error) {
        console.log(error);
        res.status(400).send(error);
    }
}