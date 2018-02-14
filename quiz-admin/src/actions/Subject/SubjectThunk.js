import { default as SubjectActions } from './SubjectAction' 
import { createSubject } from './SubjectAPI' 

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