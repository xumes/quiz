import { createReducer } from 'reduxsauce' 
import Immutable from 'seamless-immutable'
import { SubjectTypes } from './../../actions/Subject/SubjectAction'

export const INITIAL_STATE = Immutable({ 
    newSubject: {error: false, loading: false, subject: {name: '', description: ''}}
})

export const createSuccess = (state = INITIAL_STATE, action) => {
    return {...state, newSubject: { error:false, loading: true, subject: {name: '', description: ''}} }
}

export const createSubject = (state = INITIAL_STATE, action) => {
    return {...state, newSubject: { error:false, loading: false, subject: action.subject} }
}

export const createError = (state = INITIAL_STATE, action) => {
    return {...state, newSubject: { error:true, loading: false, subject: {name: '', description: ''}} }
}

export const HANDLER = {
    [SubjectTypes.CREATE_SUCCESS]: createSuccess,
    [SubjectTypes.CREATE_SUBJECT]: createSubject,
    [SubjectTypes.CREATE_ERROR]  : createError
}

export default createReducer(INITIAL_STATE, HANDLER)

