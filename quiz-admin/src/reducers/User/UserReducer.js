import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserTypes } from './../../actions/User/UserAction'

export const INITIAL_STATE = Immutable({
    newUser: { error: false, loading: false, user: { name: '', email: '', password: '' } },
    userList: { error: false, loading: false, users: [] },
    deleteUser: { error: false, loading: false, users: {} }
})

//CREATE
export const createSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, newUser: { error: false, loading: true, user: { name: '', email: '', password: '' } } }
}

export const createUser = (state = INITIAL_STATE, action) => {
    return { ...state, newUser: { error: false, loading: false, user: action.user } }
}

export const createError = (state = INITIAL_STATE, action) => {
    return { ...state, newUser: { error: true, loading: false, user: { name: '', email: '', password: '' } } }
}

//LIST (FETCH)
export const fetchUsers = (state = INITIAL_STATE, action) => {
    return { ...state, userList: { error: false, loading: true, users: [] } }
}

export const fetchUsersSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, userList: { error: false, loading: false, users: action.users } }
}

export const fetchUsersError = (state = INITIAL_STATE, action) => {
    return { ...state, userList: { error: true, loading: false, users: [] } }
}

// //DELETE
// export const deleteUser = (state = INITIAL_STATE, action) => {
//     return { ...state, deleteUser: { error: false, loading: true, users: {} } }
// }

// export const deleteUserSuccess = (state = INITIAL_STATE, action) => {
//     return { ...state, deleteUser: { error: false, loading: false, users: action.users } }
// }

// export const deleteUserError = (state = INITIAL_STATE, action) => {
//     return { ...state, deleteUser: { error: true, loading: false, users: {} } }
// }

export const HANDLER = {
    [UserTypes.CREATE_SUCCESS]: createSuccess,
    [UserTypes.CREATE_USER]: createUser,
    [UserTypes.CREATE_ERROR]: createError,
    [UserTypes.FETCH_USERS]: fetchUsers,
    [UserTypes.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
    [UserTypes.FETCH_USERS_ERROR]: fetchUsersError,
    // [UserTypes.DELETE_USER]: deleteUser,
    // [UserTypes.DELETE_USER_SUCCESS]: deleteUserSuccess,
    // [UserTypes.DELETE_USER_ERROR]: deleteUserError
}

export default createReducer(INITIAL_STATE, HANDLER)

