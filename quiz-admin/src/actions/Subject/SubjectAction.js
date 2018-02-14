import { createActions } from 'reduxsauce' 

const { Types, Creators } = createActions({
    createSuccess: ['subject'],
    createError: ['error'],
    createSubject: null
    
})

export const SubjectTypes = Types
export default Creators