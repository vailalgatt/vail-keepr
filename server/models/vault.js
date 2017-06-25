import { models } from '../config/constants'
let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String },
    imgUrl: { type: String },
    created: { type: Number, default: Date.now() },
    createrId: { type: Objectid, ref: models.user.name, required: true },
    keeps: [{ type: ObjectId, ref: models.keeps.name, required: true}]
});

module.exports = mongoose.model(models.vault.name, schema);