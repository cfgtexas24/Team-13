import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    texts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Text'
    }],
})

export const Chat = mongoose.models.Chat || mongoose.model('Chat', chatSchema);