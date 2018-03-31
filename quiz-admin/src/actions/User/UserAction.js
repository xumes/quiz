import { createActions } from 'reduxsauce' 

const { Types, Creators } = createActions({
    createUser: null,
    createSuccess: ['user'],
    createError: ['error'],
    fetchUsers: null,
    fetchUsersSuccess: ['users'],
    fetchUsersError: ['error'],
    deleteUser: null,
    deleteUserSuccess: null,
    deleteUserError: ['error']
    
})

export const UserTypes = Types
export default Creators