import express from 'express';
import { add, FindProduct, getProducts, productDetail, remove, update, uploadFile } from '../controllers/product';
import { checkAuth } from '../Midlequer/Midlequer';
import multer from 'multer';
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
           cb(null, "./src/UploadImage");
    },
    filename: (req, file, cb) => {
           cb(null, req.body.name);
    },
});
const upload = multer({storage: storage});
const router = express.Router();
router.get("/product", getProducts);
router.get("/product/:id", productDetail);
router.get("/search/:key", FindProduct);

router.post("/product", add)
router.post("/uploadFile",upload.single("image"),uploadFile)
router.put("/product/:id",update)
router.delete("/product/:id", remove)
export default router;