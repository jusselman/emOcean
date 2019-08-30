const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    rating: Number,
    userComment: String
});

module.exports = mongoose.model(
    'Emo', 
    emoSchema
    );