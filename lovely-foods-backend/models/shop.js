const mongoose = require("mongoose");

const shopSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
		},
		shopCategories: [
			{
				type: String,
				required: true,
			},
		],
		location: {
			type: String,
			required: true,
		},
		timings: {
			type: String,
		},
		contact: {
			type: Number,
			unique: true,
			required: true,
		},
		likeCount: {
			type: Number,
			default: 0,
		},
		shopRating: {
			type: Number,
			required: false,
		},
		foodsAvailable: [
			{
				food: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Food",
				},
				rating: Number,
				price: Number,
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

const Shop = mongoose.model("Shop", shopSchema);
module.exports = Shop;
