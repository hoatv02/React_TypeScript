
// const products = [{ name: "products ok" ,id:"1"},{ name: "products two" ,id:"2"},{ name: "products two" ,id:"3"}]
import Product from '../Models/product'
export const getProducts = async (req, res) => {
    try {
        let filter = {}
        // console.log(req.query)
        const { query } = req
        if (query.category) {
            filter.category = query.category
        }
        const products = await Product.find(filter);
        res.status(200).json({
            data: products,
        });
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
};





export const productDetail = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOne({ _id: id });
        res.status(200).json({
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Product not found",
        });
    }
};
export const add = async (req, res) => {
    try {
        const body = req.body;
        const product = await new Product(body).save();
        return res.status(200).json({
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            messsage: "Không thêm được sản phẩm",
        });
    }
};
export const update = async (req, res) => {
    try {
        const id = req.params.id;
        const body = req.body;

        const product = await Product.findOneAndUpdate({ _id: id }, body, { new: true });

        res.status(200).json({ data: product, });
    } catch (error) {
        res.status(400).json({
            messsage: "Không cap nhat được sản phẩm",
        });
    }
};
export const remove = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findOneAndDelete({ _id: id });
        res.status(200).json({
            data: product,
        });
    } catch (error) {
        res.status(400).json({
            message: "Xoa san pham khong thanh cong",
        });
    }
};


export const uploadFile = async (req, res) => {
    try {
        res.status(200).json({
            message: "Upload thành công"
        })
    } catch (error) {
        res.status(400).json({
            message: "Upload thất bại"
        })
    }
}
Product.find({ name: "ok" }, (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log(data)
    }
})

export const FindProduct = async (req, res) => {
    try {
        const key = req.params.key;
        // console.log('etsst find',req.params.key)
        if (key === '') {
            const products = await Product.find();
           return  res.status(200).json({
                data: products,
            });
        }
        const data = await Product.find({
            "$or": [
                {
                    productName: { $regex: key ,$options : "i"},
                    
                }
            ]
        })
        res.status(200).json({
            data: data,
            message: "Tìm sản phâm thành công !"
        })
    } catch (error) {
        res.status(400).json({
            message: "Tìm sản phẩm thất bại !"
        })
    }
}