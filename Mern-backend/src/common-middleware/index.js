exports.userMiddleware = (req , res, next) => {


}

exports.adminMiddleware = (req , res, next) => {
        if(req.user.role !== 'admin'){
            return res.status(400).json({ message: 'Acess denied'})
        }
        next();

}


