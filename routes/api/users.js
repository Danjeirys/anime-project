const express = require("express")
const router = express.Router()
const usersCtrl = require("../../controllers/api/users")
const ensureLoggedIn = require('../../config/ensureLoggedIn')

// POST /api/users
router.post("/", usersCtrl.create)

// POST /api/users/login
router.post("/login", usersCtrl.login)

router.get('/check-token', usersCtrl.checkToken)

// Insert ensureLoggedIn on all routes that need protecting
router.get('/check-token', ensureLoggedIn, usersCtrl.checkToken);

module.exports = router;