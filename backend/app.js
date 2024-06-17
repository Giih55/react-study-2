require("dotenv").config()

const expresss = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;

const app = expresss();

// config JSON and form data response
app.use(expresss.json())
app.use(expresss.urlencoded({ extended: false }));

// solve CORS
app.use(cors({credentials: true, origin: "http://localhost:3000"}));

// upload directory
app.use("/uploads", expresss.static(path.join(__dirname, "/uploads")))

// DB connection
require("./config/db.js");

// routes
const router = require("./routes/Router.js");

app.use(router);

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})