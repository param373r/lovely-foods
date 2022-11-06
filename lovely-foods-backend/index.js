const express = require("express");
require("./db/mongoose");
const userRouter = require("./routes/user");
const shopRouter = require("./routes/shop");
const foodRouter = require("./routes/food");
const favRouter = require("./routes/favourites");
const cors = require("cors");


const app = express();

app.use(cors());
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(userRouter);
app.use(shopRouter);
app.use(foodRouter);
app.use(favRouter);

app.listen(port, () => {
	console.log("Server is up on port " + port);
});
