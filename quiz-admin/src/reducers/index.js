import { combineReducers } from 'redux'
import Subject from './Subject'
import User from './User'
import Question from './Question'

export default combineReducers({
    subjectStore: Subject,
    userStore: User,
    questionStore: Question,
})