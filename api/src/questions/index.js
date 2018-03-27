import express from 'express'
import list from './list'
import create from './create'
import remove from './remove'

const router = express.Router()

router.get('/', list)
router.post('/', create)
router.delete('/:id/questions/:id', removeAnswers)
router.delete('/:id', remove)

export default router