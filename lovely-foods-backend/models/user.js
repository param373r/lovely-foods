const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Food = require("./food");
const Shop = require("./shop");

const Schema = mongoose.Schema();

const userSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			unique: true,
			required: true,
			trim: true,
			lowercase: true,
			validate(value) {
				if (!validator.isEmail(value)) {
					throw new Error("Email is invalid");
				}
			},
		},
		password: {
			type: String,
			required: true,
			minlength: 8,
			trim: true,
			validate(value) {
				if (value.toLowerCase().includes()) {
					throw new Error('Password cannot contain "password"');
				}
			},
		},
		phone: {
			type: Number,
			unique: true,
			// required: true
		},
		favouriteFoods: [
			{
				shop: {
					_id: {
						type: mongoose.Schema.Types.ObjectId,
						ref: "Shop",
					},
					food: {
						type: mongoose.Schema.Types.ObjectId,
						ref: "Food",
					},
				},
			},
		],
		favouriteShops: [
			{
				_id: {
					type: mongoose.Schema.Types.ObjectId,
					ref: "Shop",
				},
			},
		],
		tokens: [
			{
				token: {
					type: String,
					required: true,
				},
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

// Delete the properties before returning the response
userSchema.methods.toJSON = function () {
	const user = this;
	const userObject = user.toObject();

	delete userObject.password;
	delete userObject.tokens;
	delete userObject.avatar;

	return userObject;
};

// To generate an auth token when a user logs in
userSchema.methods.generateAuthToken = async function () {
	const user = this;
	const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET);

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

// To return user object after verification of email and password i.e. login user
userSchema.statics.findByCredentials = async (email, password) => {
	const user = await User.findOne({ email });

	if (!user) {
		throw new Error("Unable to login");
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error("Unable to login");
	}

	return user;
};

// Hash the plain text password before saving
userSchema.pre("save", async function (next) {
	const user = this;

	if (user.isModified("password")) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

// Delete user data (ratings)

const User = mongoose.model("User", userSchema);

module.exports = User;
