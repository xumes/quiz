import User from './../models/User'

export default async (req, res) => {
    let user = []
    try{
        user = await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(204).end()
    } catch(err){
        return res.status(500).end()
    }
    
}