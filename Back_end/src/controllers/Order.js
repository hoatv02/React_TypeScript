import Order from '../models/Order'

export const getOrder = async (req, res) => {
    try {
        const order = await Order.find()
        res.status(200).json({
            data: order
        })
    } catch (error) {
        res.status(400).json({
            message: "Thông tin đặt hàng trống"
        })
    }
}
export const getOrderDetail = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        // const order = await Order.findOne({ _id: id })
    } catch (error) {
        
    }
}
export const addOrder = async (req, res) => {
    try {
        const body = req.body;
        console.log(body)
        const order = await new Order(body).save();
        return res.status(200).json({
            data: order,
        });
    } catch (error) {
        res.status(400).json({
            message: "Thanh toán thất bại"
        })

    }
}

export const removeOrder = async (req, res) => {
    try {
        const id = req.params.id
        console.log(id)
        const order = await Order.findOneAndDelete({ _id: id })
        res.status(200).json({
            order
        })
    } catch (error) {
        res.status(400).json({
            message:"Xoa thong tin dat hang thanh cong"
        })
        
    }
}

export const editOrder = async (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        const order = await Order.findOneAndUpdate({_id: id }, body, { new : true})
        res.status(200).json({
            order,
            message:"Chỉnh sửa thông tin thành công"
        })
    } catch (error) {
        res.status(400).json({
            message:"Chỉnh sửa thất bại"
        })
    }
}