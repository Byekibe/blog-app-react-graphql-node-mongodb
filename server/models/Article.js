import mongoose from "mongoose";

const ArticleSchema = new mongoose.Schema({
    title: {
        type: String
    },

    subtitle: {
        type: String
    },

    body: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    },

    author: {
        type: String
    }
});

export default mongoose.model('Articles', ArticleSchema);