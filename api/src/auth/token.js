import User from './../models/User'
import jwt from 'jwt-simple'
import JwtConfig from './../auth/config'

export default async (req, res) => {
    let { email, password } = req.body
    
    try {
        let user = await User.findOne({email})
        if (!user) {
            return res.status(404)
                    .json({token: '', msg: 'User not found'})
        }
        user.validate(password, (err, result) => {
            console.log(result)
            if (!result || err) {
                return res.status(404)
                    .json({token: ''})
            }

            let token = jwt.encode({id: user._id}, JwtConfig.secretOrKey)
            return res.json({token})
        })

    } catch (err) {
        return res.status(500)
                    .json({ err })

    }
}