const router = require("express").Router();

const {
  login,
  logout,
  getCurrentUser,
} = require("../controllers/AuthController");
const { authenticate, authorize } = require("../middlewares/AuthMiddleware");

router.get("/me", authenticate, getCurrentUser);
router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
