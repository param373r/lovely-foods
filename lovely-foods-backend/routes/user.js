const express = require("express");
const User = require("../models/user");
const auth = require("../middleware/auth");
const multer = require("multer");
const router = new express.Router();

// To create a new user
router.post("/user/register", async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		const token = await user.generateAuthToken();
		res.status(201).send({ user, token });
	} catch (e) {
		res.status(400).send(e);
	}
});
// Login User
router.post("/user/login", async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.email,
			req.body.password
		);
		const token = await user.generateAuthToken();
		res.send({ user, token });
	} catch (e) {
		res.status(400).send();
	}
});

// Logout user
router.post("/user/logout", auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send("Successfully logged out...");
	} catch (e) {
		res.status(500).send();
	}
});
// Logout user from all devices
router.post("/user/logoutAll", auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (e) {
		res.status(500).send();
	}
});
// Read profile
router.post("/user/readProfile", auth, async (req, res) => {
	res.send(req.user);
});
// Update user
router.post("/user/updateUser", auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ["name", "email", "password", "phone", "age"];
	const isValidOperation = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidOperation) {
		return res.status(400).send({ error: "Invalid updates!" });
	}

	try {
		updates.forEach((update) => (req.user[update] = req.body[update]));
		await req.user.save();
		res.send(req.user);
	} catch (e) {
		res.status(400).send(e);
	}
});
// Delete user
router.post("/user/deleteUser", auth, async (req, res) => {
	try {
		await req.user.remove();
		res.send(req.user);
	} catch (e) {
		res.status(500).send();
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

// Upload avatar
router.post(
	"/user/uploadAvatar",
	auth,
	upload.single("avatar"),
	async (req, res) => {
		const buffer = await req.file.buffer;
		req.user.avatar = buffer;
		await req.user.save();
		res.send();
	},
	(error, req, res, next) => {
		res.status(400).send({ error: error.message });
	}
);
// Delete avatar
router.post("/user/deleteAvatar", auth, async (req, res) => {
	req.user.avatar = undefined;
	await req.user.save();
	res.send({ message: "Success!" });
});

// Favourite Foods Read
router.post("/favFood/readFoods", auth, async (req, res) => {
	const user = req.user;
	res.send(user.favouriteFoods);
});
// Favourite Shops Read
router.post("/favShop/readShops", auth, async (req, res) => {
	const user = req.user;
	res.send(user.favouriteShops);
});

// // Get user avatar
router.post("/users/:id/avatar", async (req, res) => {
	try {
		const user = await User.findById(req.params.id);

		if (!user || !user.avatar) {
			throw new Error();
		}

		res.set("Content-Type", "image/png");
		res.send(user.avatar);
	} catch (e) {
		res.status(404).send();
	}
});

router.post("/users/getUserIds", async (req,res) => {
	try{
		const user = User.find({});
		console.log(user);
		// user.
	} catch (e){
		res.send(404);
	}
})
module.exports = router;
