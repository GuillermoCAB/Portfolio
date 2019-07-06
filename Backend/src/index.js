const express = require("express");
const mongoose = require("mongoose");

const cors = require("cors");

//Start Server
const app = express();
app.use(express.json());
app.use(cors);

//Connect DB
mongoose.connect("host", { useNewUrlParser: true });

//Rotas
const routes = require("./routes.js");
app.use(routes);
app.listen(3030);

