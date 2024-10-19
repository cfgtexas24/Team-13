import createText from "../lib/actions/text.actions";
import { Text } from "../lib/models/Text.model";

export const createTextRoute = async (req, res) => {
    try {
        console.log('createText');

        // Extract data from request body
        const { text, user, chat } = req.body;

        // Create text using data from frontend
        const newText = await createText(text, user, chat);

        console.log('text:', newText);
        return res.status(201).json(newText);
    }
    catch (error) {
        console.error('Error creating text:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

// TextController.js
export const getTextsRoute = async (req, res) => {
    try {
        const { room } = req.params;
        await connectToDB();
        const texts = await Text.find({ chat: room });
        return res.status(200).json({ texts });
    } catch (error) {
        console.error('Error fetching texts:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};