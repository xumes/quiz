import { default as SubjectActions } from './SubjectAction' 
import { createSubject, fetchSubjects } from './SubjectAPI' 

export function thunkCreateSubject(subject) {
    return async (dispatch) => {
        dispatch(SubjectActions.createSubject(true))
        try {
            let res = await createSubject(subject)
            dispatch(SubjectActions.createSuccess(res.data))
        } catch (err) {
            dispatch(SubjectActions.createSubject(false))
            dispatch(SubjectActions.createError(true))
        }
        
    }
}

export function thunkFetchSubjectList(subject) {
    return async (dispatch) => {
        dispatch(SubjectActions.fetchSubjects(true))
        try {
            let res = await fetchSubjects()
            dispatch(SubjectActions.fetchSubjectsSuccess(res.data.subjects))
        } catch (err) {
            console.log(err)
            dispatch(SubjectActions.fetchSubjects(false))
            dispatch(SubjectActions.fetchSubjectsError(true))
        }
        
    }
}