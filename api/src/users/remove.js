import User from './../models/User'

export default async (req, res) => {
    try{
        await User.findByIdAndRemove(req.params.id)
        return res.status(202).end()
    } catch(err){
        return res.status(500).end()
    }
    
}