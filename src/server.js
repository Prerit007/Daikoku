const path = require("path");
const exp = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const flash = require("connect-flash");

const aboutData = require("./routes/about");
const homeData = require("./routes/home");
const contactData = require("./routes/contact");
const projectsData = require("./routes/projects");
const infoData = require("./routes/info");
const profileData = require("./routes/profile");
const authData = require("./routes/auth");
const Student = require("./models/student");

const MONGODB_URI =
  "mongodb+srv://dg325:daikoku@cluster0.omymgdd.mongodb.net/Daikoku";

const app = exp();
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: "sessions",
});

app.set("view engine", "ejs");
app.set("views", "views");

app.use(exp.static("views"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(exp.static(path.join(__dirname, "public")));
app.use(flash());
app.use(
  session({
    secret: "daikoku",
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);

app.use((req, res, next) => {
  if (!req.session.student) {
    return next();
  }
  Student.findById(req.session.student._id)
    .then((user) => {
      req.id = user._id;
      req.isLoggedIn = req.session.isLoggedIn;
      next();
    })
    .catch((err) => console.log(err));
});

// app.use(exp.static(__dirname + "/public"));
app.use(homeData);
app.use(aboutData);
app.use(contactData);
app.use(projectsData);
app.use(authData);
app.use(infoData);
app.use(profileData);

mongoose
  .connect(
    "mongodb+srv://dg325:daikoku@cluster0.omymgdd.mongodb.net/Daikoku?retryWrites=true&w=majority"
  )
  .then((result) => {
    console.log("Mongo Connection Successful");
    app.listen(3002);
  })
  .catch((err) => {
    console.log(err);
  });
