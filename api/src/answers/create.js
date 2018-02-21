import Answer from './../models/Answer'

export default async (req, res) => {
    let answer = new Answer(req.body)

    try {
        await answer.save()
        return res.status(201).json({answer})
    } catch(err) {
        return res.status(500).json({err})
    }
    
}