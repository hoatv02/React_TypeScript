import userInfo from "../models/userInfo"


export const getUser =async (req, res) => {
    try {
        const user = await userInfo.find()
        console.log("user",user)
        res.status(200).json({
            data:user,
            message:"Lay du lieu user thanh cong !"
        })
    } catch (error) {
        res.status(400).json({
            message:"Lay du lieu that bai"
        })
    }
}

export const getUserDetail = async (req, res) => {
    try {
        const id = req.params.id
        const user = await userInfo.findOne({_id:id})
        console.log(user)
        res.status(200).json({
            data:user,
            message:"Lay du lieu user thanh cong"
        })
    } catch (error) {
        res.status(400).json({
            message: error
        })
    }
}
export const addUser = async (req, res) => {
    try {
        const body = req.body
        const user = await new userInfo(body).save()
        res.status(200).json({
            data:user,
            message:"Them thanh cong"
        })
    } catch (error) {
        res.status(400).json({
            message:"them that bai"
        })
    }
}

export const editUser = async (req, res) => {
    try {
        const id= req.params.id
        const body = req.body
        const user = await userInfo.findByIdAndUpdate({_id:id}, body,{new:true})
        res.status(200).json({
            data:user,
            message:"edit thanh cong !"
        })
    } catch (error) {
        res.status(400).json({
            message:"edit that bai !"
        })
    }
}

export const removeUser = async (req, res) => {
    try {
        const id= req.params.id
        const user = await userInfo.findOneAndDelete({ _id: id })
        res.status(200).json({
            data:user,
            message:"delete thanh cong !!!"
        })
    } catch (error) {
        res.status(400).json({
            message:"delete that bai !!!"
        })
    }
}