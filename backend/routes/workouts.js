const express = require("express");
const {
  createWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
  deleteWorkout
} = require("../controllers/workoutController");
const { update } = require("../models/workoutModel");

const router = express.Router();

//GET all workouts
router.get("/", getWorkouts);
//GET a single workout
router.get("/:id", getWorkout);
//POST a single workout
router.post("/", createWorkout);
//DELETE a single workout
router.delete("/:id", deleteWorkout);
//update a single workout
router.patch("/:id", updateWorkout);

module.exports = router;
