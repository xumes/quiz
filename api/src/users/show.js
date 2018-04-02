import User from './../models/User'

export default async (req, res) => {
    let user = []
    try {
        user = await User.findById(req.params.id)
                     .select('-password')
        return res.json({ user })
    } catch (err) {
        return res.status(500).json({ err })
    }

} 