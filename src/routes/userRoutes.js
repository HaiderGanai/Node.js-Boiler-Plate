const express = require('express');
const { getProfile, updateProfile, deleteProfile, changeUserPassword } = require('../controllers/userController');
const { verifyToken } = require('../middlewares/jwtMiddleware');
const upload = require('../middlewares/upload');
const userRouter = express.Router();

userRouter.get('/profile',verifyToken, getProfile);
userRouter.patch('/profile',verifyToken,upload.single('profilePic'), updateProfile);
userRouter.delete('/profile',verifyToken, deleteProfile);
userRouter.patch('/profile/password',verifyToken, changeUserPassword);

module.exports = { userRouter };