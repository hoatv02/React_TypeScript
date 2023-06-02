import express from 'express';
import { addOrder, editOrder, getOrder, getOrderDetail, removeOrder } from '../controllers/Order';
const router = express.Router()

router.get('/getOrder',getOrder)
router.post('/addOrder',addOrder)
router.post('/editOrder/:id',editOrder)
router.get('/getOrder/:id',getOrderDetail)
router.delete('/deleteOrder/:id',removeOrder)
export default router;