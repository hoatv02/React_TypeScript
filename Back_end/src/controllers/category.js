import Category from '../Models/category'
export const getCategory = async (req, res) => {
    try {
        const category = await Category.find();
        res.status(200).json({
            data: category,
        });
    } catch (error) {
        res.status(400).json({
            message: error,
        });
    }
  };
  
export const getDetail = async (req, res) => {
    try {
        const id = req.params.id
        const category = await Category.findOne({_id:id})
        res.status(200).json({
            category
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}

export const addCategory = async (req, res) => {
    try {
        const body =req.body;
        const category = await new Category(body).save()
        res.status(200).json({
            category
        })
    } catch (error) {
        res.status(400).json({
            message:"Them danh muc that bai"
        })
    }
}

export const removeCategory = async (req, res) => {
    try {
        const id = req.params.id;
        const category = await Category.findOneAndDelete({ _id: id })
        res.status(200).json({
            category
        })
    } catch (error) {
        res.status(400).json({
            message:"Lỗi"
        })
    }
}

export const updateCategory = async (req, res) => {
    try {
        const body = req.body;
        const id = req.params.id;
        console.log(id)
        const category = await Category.findOneAndUpdate({_id: id},body,{new : true})
        res.status(200).json({
            category
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}