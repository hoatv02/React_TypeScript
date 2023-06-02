import express from 'express';
import { addUser, editUser, getUser, getUserDetail, removeUser } from "../controllers/user";

const router = express.Router()
    router.get('/user',getUser)
    router.put('/editUser/:id',editUser)
    router.delete('/removeUser/:id',removeUser)
    router.get('/user/:id',getUserDetail)
    router.post('/addUser',addUser)
export default router;