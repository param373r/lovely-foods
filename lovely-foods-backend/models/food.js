const mongoose = require("mongoose");
const validator = require("validator");

const foodSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
		},
		shopsAvailable: [
			{
				shopId: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Shop",
				},
			},
		],
		likeCount: {
			type: Number,
			default: 0,
		},
		foodCategories: [
			{
				type: String,
			},
		],
		avatar: {
			type: Buffer,
		},
	},
	{
		timestamps: true,
	}
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
