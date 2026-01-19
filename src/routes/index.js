const express = require("express");
const router = express.Router();

const { authRouter } = require("./authRoutes");
const { userRouter } = require("./userRoutes");

// Mount routers
router.use("/auth", authRouter);
router.use("/users", userRouter);

// 404 handler
// router.all('*', (req, res) => {
//   res.status(404).json({
//     status: 'fail',
//     message: `Can't find ${req.originalUrl} on this server!`
//   });
// });

module.exports = router;
