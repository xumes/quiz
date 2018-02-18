import express from 'express'
import list from './list'
import show from './show'
import create from './create'
import update from './update'
import remove from './remove'

const router = express.Router()

router.get('/', list)
router.get('/:id', show)
router.post('/', create)
router.put('/:id', update)
router.patch('/:id', update)
router.delete('/:id', remove)

export default router