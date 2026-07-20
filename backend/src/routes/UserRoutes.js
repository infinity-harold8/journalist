const router = require("express").Router();

const {
  createUser,
  updateUser,
  deleteUser,
  getUser,
} = require("../controllers/UserController");

const { authenticate, authorize } = require("../middlewares/AuthMiddleware");

router.post("/create", authenticate, authorize("admin"), createUser);
router.get("/get", getUser);
router.patch("/update/:id", authenticate, authorize("admin"), updateUser);
router.delete("/delete/:id", authenticate, authorize("admin"), deleteUser);

module.exports = router;
