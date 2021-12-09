const express = require("express");
const cors = require("cors");

const db = require("./db");
const routes = require("./route");

const PORT = process.env.PORT | 8080;

const app = express();

app.use(cors());
app.use(express.json());
app.use("/", routes);

app.listen(PORT, () => console.log(`[ OK ] Listening on port ${PORT}.`));
db.init();
