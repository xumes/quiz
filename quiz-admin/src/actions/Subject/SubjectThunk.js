import { default as SubjectActions } from './SubjectAction' 
import { createSubject, fetchSubjects, deleteSubject } from './SubjectAPI' 

export function thunkCreateSubject(subject) {
    return async (dispatch) => {
        dispatch(SubjectActions.createSubject(true))
        try {
            let res = await createSubject(subject)
            dispatch(SubjectActions.createSuccess(res.data))
            dispatch(thunkFetchSubjectList())
        } catch (err) {
            dispatch(SubjectActions.createSubject(false))
            dispatch(SubjectActions.createError(true))
        }
        
    }
}

export function thunkFetchSubjectList() {
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

export function thunkDeleteSubject(subject) {
    return async (dispatch) => {
        dispatch(SubjectActions.deleteSubject(true))
        try {
            let res = await deleteSubject(subject)
            dispatch(SubjectActions.deleteSubjectSuccess())
            dispatch(thunkFetchSubjectList())
        } catch (err) {
            console.log(err)
            dispatch(SubjectActions.deleteSubject(false))
            dispatch(SubjectActions.deleteSubjectError(true))
        }
        
    }
}