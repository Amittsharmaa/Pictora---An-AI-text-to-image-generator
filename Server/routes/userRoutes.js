import express from 'express'
import {userRegister, loginUser, userCredit} from '../controller/userControl.js'
import userAuth from '../middleware/auth.js';

const userRouter = express.Router();
userRouter.post('/register', userRegister)
userRouter.post('/login', loginUser)
userRouter.get('/credits',userAuth ,userCredit)

export default userRouter;