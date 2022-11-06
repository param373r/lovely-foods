const express = require("express");
const Food = require("../models/food");
const auth = require("../middleware/auth");
const multer = require('multer')
const router = new express.Router();

// Create
router.post("/food/register", async (req, res) => {
	const food = new Food(req.body);
	try {
		await food.save();
		res.status(201).send({ food });
	} catch (e) {
		res.status(400).send(e);
	}
});
// Read foods
router.post("/food/readFoods", async (req, res) => {
	const filter = {};
	const foods = await Food.find(filter);
	res.send(foods);
});
// Read Food
router.post("/food/foodDetails", async (req, res) => {
	const _id = req.body._id;
	const food = await Food.findOne({ _id });
	res.send(food);
});

// Get food avatar

router.post("/foods/:id/avatar", async (req, res) => {
	try {
		const food = await Food.findById(req.params.id);

		if (!food || !food.avatar) {
			throw new Error();
		}

		res.set("Content-Type", "image/png");
		res.send(food.avatar);
	} catch (e) {
		res.status(404).send();
	}
});
const upload = multer({
	limits: {
		fileSize: 100000,
	},
	fileFilter(req, file, cb) {
		if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
			return cb(new Error("Please upload an image"));
		}
		cb(undefined, true);
	},
});
router.post(
	"/food/uploadAvatar",
	upload.single("avatar"),
	async (req, res) => {
		const buffer = await req.file.buffer;
		const food = await Food.findOne({_id: req.body._id});
		food.avatar = buffer;
		await food.save();
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);
// Update and Delete from the database only

module.exports = router;
