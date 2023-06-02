import express from 'express';
import { addCategory, getCategory, getDetail, removeCategory, updateCategory,  } from '../controllers/category';
const router = express.Router()

router.get('/category',getCategory)
router.get('/category/:id',getDetail)
router.post('/category',addCategory)
router.delete('/category/:id',removeCategory)
router.put('/category/:id',updateCategory)



export default router;