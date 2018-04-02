import User from './../models/User'

export default async (req, res) => {
    let user = []
    try{
        let user = await User.findById(req.params.id)

        if('password' in req.body){
            req.body.password = user.hasPassword(req.body.password) 
        }

        await User.findByIdAndUpdate(req.params.id, req.body)
        return res.status(204).end()
    } catch(err){
        return res.status(500).end()
    }
    
}