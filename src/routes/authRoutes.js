const express = require('express');
const { register, login, forgotPassword, resetPassword, verifyOtp, logout } = require('../controllers/authController');
const { verifyToken } = require('../middlewares/jwtMiddleware');
const { sendEmailController } = require('../controllers/emailController');
const upload = require('../middlewares/upload');
const authRouter = express.Router();

authRouter.post('/register',upload.single('profilePic'), register);
authRouter.post('/login', login);
authRouter.post('/forgotPassword', forgotPassword);
authRouter.post('/sendemail', sendEmailController);
authRouter.post('verifyOtp', verifyOtp);
authRouter.patch('/resetPassword', verifyToken, resetPassword);
authRouter.post('/logout', verifyToken, logout);

module.exports = { authRouter };