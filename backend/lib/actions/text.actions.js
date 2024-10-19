import { connectToDB } from "../mongoose";
import { Text } from "../models/Text.model";

export default async function createText(text, user, chat) {
    try {
        console.log('text:', text);
        console.log('connecting to db...');
        await connectToDB();
        console.log('creating text...');
        const newText = await Text.create({ content: text, user, chat });
        console.log('text created:', newText.content);
        // push the new text to the chat's texts array
        chat.texts.push(newText);
        await chat.save();
        return { success: true, text: newText };
    } catch (error) {
        console.error('error creating text:', error);
        return { error: 'Failed to create text', code: 'CREATE_FAILED' };
    }
}
