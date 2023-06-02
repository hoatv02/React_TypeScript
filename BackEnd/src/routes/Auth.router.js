import express from 'express';
import { getSignup, getSignupDetail, signin, signup } from '../controllers/Auth';
const router = express.Router()
router.post("/signup",signup)
router.get("/getSignup",getSignup)
router.get("/getSignupDetail/:access",getSignupDetail)
router.post("/signin",signin)
export default router;