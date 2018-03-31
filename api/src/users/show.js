import User from './../models/User'

export default async (req, res) => {
    let user = []
    try {
        user = await User.findById(req.params.id)
        console.log("params.id", req.params.id)
        console.log("result: ", user)
        return res.json({user})
    } catch(err) {
        return res.status(500).json({err}) 
    }

} 