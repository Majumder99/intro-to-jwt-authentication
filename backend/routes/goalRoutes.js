const express = require("express");
const router = express.Router();
const {
  getGoals,
  setGoals,
  updateGoals,
  deleteGoals,
} = require("../controllers/goalController");

const { protect } = require("../middleware/authMiddleware");

//Read and Create methods joined together
router.route("/").get(protect, getGoals).post(protect, setGoals);

// //Read method
// router.get("/", getGoals);

// //Create method
// router.post("/", setGoals);

//Update and delete methods joined together
router.route("/:id").put(protect, updateGoals).delete(protect, deleteGoals);

// //Update method
// router.put("/:id", updateGoals);

// //Delete method
// router.delete("/:id", deleteGoals);

module.exports = router;
