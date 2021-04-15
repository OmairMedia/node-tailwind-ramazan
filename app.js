// Libraries
const express = require("express");
const exphbs = require("express-handlebars");
const session = require("express-session");
const flash = require("connect-flash");
const dotenv = require("dotenv");
const path = require("path");

// Setting Up Config .env
dotenv.config({ path: "./Config/config.env" });

// Initializing App
const app = express();

// Static Folder
app.use(express.static(path.join(__dirname, "public")));
// Express Bodyparser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Initializing Session Middleware
app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true },
  })
);

// Connect Flash Middleware
app.use(flash());

// Setting Up View Engine
app.engine(".hbs", exphbs({ extname: ".hbs", defaultLayout: "main" }));
app.set("view engine", ".hbs");

// Routes Middlewares
app.use("/", require("./routes/slash"));

// Server Starting
let port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(
    `Server started on http://localhost:${port} on ${process.env.NODE_ENV} mode`
  );
});
