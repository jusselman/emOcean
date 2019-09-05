const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const opinionSchema = new Schema({
    rating: Number,
    userComment: String
});

module.exports = mongoose.model(
        'Opinion',
        opinionSchema

    );