const express = require("express"); //Import Express
require("dotenv").config();
const app = express(); //Start up express app
const workoutRoutes = require("./routes/workouts");
const userRoutes = require("./routes/user");
const mongoose = require("mongoose");

app.use(express.json());//middleware for json reponses

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//Routes
app.use("/api/workouts", workoutRoutes);
app.use("/api/user", userRoutes);

//Connect to Db
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    //Listens for requests
    app.listen(process.env.PORT, () => {
      console.log(`Connected to DB and Listening on port ${process.env.PORT}`);
    });
  })
  .catch((error) => console.log(error));
