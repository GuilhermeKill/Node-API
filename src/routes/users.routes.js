const { Router } = require('express')
const multer = require("multer")
const uploadConfig = require("../configs/upload")

const UsersController = require('../controllers/UsersController')
const ensureAuthenticated = require("../middlewares/ensureAuthenticated")

const upload = multer(uploadConfig)
const usersRoutes = Router()

const usersController = new UsersController()

usersRoutes.post('/', usersController.create)
usersRoutes.put('/', ensureAuthenticated, usersController.update)
usersRoutes.patch("/avatar", ensureAuthenticated, )

module.exports = usersRoutes
