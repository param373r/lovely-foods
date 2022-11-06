const express = require("express");
const Shop = require("../models/shop");
const Food = require("../models/food");
const auth = require("../middleware/auth");
const multer = require('multer');
const router = new express.Router();

// Add shops
router.post("/shop/register", async (req, res) => {
	const shop = new Shop(req.body);
	try {
		await shop.save();
		res.status(201).send({ shop });
	} catch (e) {
		res.status(400).send(e);
	}
});
// Read shops
router.post("/shop/readShops", async (req, res) => {
	const filter = {};
	const shops = await Shop.find(filter);
	res.send(shops);
});

// Read shop
router.post("/shop/shopDetails", async (req, res) => {
	const _id = req.body._id;
	try {
		const shop = await Shop.findOne({ _id });
		res.send(shop);
	} catch (e) {
		console.log(e);
	}
});
// Get shop avatar
router.post("/shops/:id/avatar", async (req, res) => {
	try {
		const shop = await Shop.findById(req.params.id);

		if (!shop || !shop.avatar) {
			throw new Error();
		}

		res.set("Content-Type", "image/png");
		res.send(shop.avatar);
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
	"/shop/uploadAvatar",
	upload.single("avatar"),
	async (req, res) => {
		console.log(req);
		const buffer = await req.file.buffer;
		const shop = await Shop.findOne({_id: req.body._id});
		shop.avatar = buffer;
		await shop.save();
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);

// Update and Delete from the database only

module.exports = router;
