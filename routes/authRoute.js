const express = require("express");
const {
  createUser,
  logUserCtrl,
  getallUsers,
  getaUser,
  deleteaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
} = require("../controller/userCtrl");
const { authMiddleware, isAdmin } = require("../middelwares/authMiddleware");
const router = express.Router();

router.post("/register", createUser);
router.post("/login", logUserCtrl);
router.get("/all-users", getallUsers);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.get("/refresh", handleRefreshToken);
router.delete("/:id", deleteaUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);

module.exports = router;
