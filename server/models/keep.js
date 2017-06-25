import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	name: { type: String, required: true },
	description: { type: String },
    articleUrl: { type: String},
	created: { type: Number, default: Date.now() },
	// Relations
	vaultId: { type: ObjectId, ref: models.vault.name, required: true },
	
});

module.exports = mongoose.model(models.keep.name, schema);