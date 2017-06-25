import { models } from '../config/constants'

let mongoose = require('mongoose')
let ObjectId = mongoose.Schema.ObjectId

var schema = new mongoose.Schema({
	title: { type: String, required: true },
	description: { type: String },
	imgUrl: { type: String, required: true },
	created: { type: Number, default: Date.now() },
	creatorId: { type: ObjectId, ref: modesl.user.name, required: true },
	author: { type: ObjectId, ref: models.user.name, required: true },
	keepCount: { type: Number, defualt: 0 },
	shareCount: { type: Number, defualt: 0 },
	viewCount: { type: Number, defualt: 0 },
	// Relations
	vaultId: { type: ObjectId, ref: models.vault.name, required: true },

});

module.exports = mongoose.model(models.keeps.name, schema);