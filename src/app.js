const express = require("express");
const { sequelize } = require("./config/dbConnect");
const router = require("./routes/index");
const app = express();
app.use(express.json());
const cors = require("cors");
app.use(cors());
require("./associations");
app.use("/uploads", express.static("uploads"));

sequelize.sync({ force: false });

app.use(`/api/${process.env.VERSION}`, router);

module.exports = app;
