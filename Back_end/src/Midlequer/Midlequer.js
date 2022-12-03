const users = [
    {id: 1, name: 'John', role:1},
    {id: 2, name: 'John', role:2},
    {id: 3, name: 'John', role:3},
];
export const checkAuth = (req, res,next) => {
    const userId = req.params.userId;
    const MidlequerCheckAuth =  users.find(user => user.id === userId)
    if(! MidlequerCheckAuth){
        res.status(404).json({message:"ban khong co quyen truy cap"})
    }
    next();
}