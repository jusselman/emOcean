const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const emoSchema = new Schema({
    image: Number,
    emoticon: String,
    comment: String
});

module.exports = mongoose.model(
    'Emo', 
    emoSchema
    );