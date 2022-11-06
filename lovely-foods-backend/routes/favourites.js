const express = require("express");
const User = require("../models/user");
const Shop = require("../models/shop");
const Food = require("../models/food");
const auth = require("../middleware/auth");
const router = express.Router();

// Favourite Food Add

router.post("/favFood/add", auth, async (req, res) => {
	const user = req.user;
	const updates = req.body;

	
	const shopFound = await Shop.findOne({ _id: updates.shop._id });
	shopFound.likeCount += 1;
	shopFound.save();
	
	const foodFound = await Food.findOne({ _id: updates.shop.food });

	if (shopFound && foodFound) {
		user.favouriteFoods.push(updates);
		user.save();
		res.status(201).send("Food Successfully Added");
	} else {
		res.status(404).send("Resource not found.");
	}
});

// Favourite Food Delete
router.post("/favFood/delete", auth, async (req, res) => {
	const user = req.user;
	const del = req.body;

	try {
		const foodsUpdated = user.favouriteFoods.filter(
			(favFood) => favFood._id != del._id
		);
		user.favouriteFoods = foodsUpdated;
		user.save();
		res.status(200).send("Food Successfully Removed");
	} catch (e) {
		res.status(404).send("Resource not found.");
	}
});

// Favourite Shops Add

router.post("/favShop/add", auth, async (req, res) => {
	const user = req.user;
	const updates = req.body;
	console.log(updates);
	const shopFound = await Shop.findOne({ _id: updates._id });

	if (shopFound) {
		user.favouriteShops.push(updates);
		user.save();
		res.status(201).send("Shop Successfully Added");
	} else {
		res.status(404).send("Resource not found.");
	}
});

// Favourite Shops Delete
router.post("/favShop/delete", auth, async (req, res) => {
	const user = req.user;
	const del = req.body;

	try {
		const shopsUpdated = user.favouriteShops.filter(
			(favShop) => favShop._id != del._id
		);
		user.favouriteShops = shopsUpdated;
		user.save();
		res.status(200).send("Shop Successfully Removed");
	} catch (e) {
		res.status(404).send("Resource not found.");
	}
});

module.exports = router;
