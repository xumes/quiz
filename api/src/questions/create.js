import Question from './../models/Question'

export default async (req, res) => {
    let question = new Question(req.body)

    try {
        await question.save()
        return res.status(201).json({question})
    } catch(err) {
        return res.status(500).json({err})
    }
    
}