import { createReducer } from 'reduxsauce'
import Immutable from 'seamless-immutable'
import { UserTypes } from './../../actions/User/UserAction'

export const INITIAL_STATE = Immutable({
    newUser: { error: false, loading: false, user: { name: '', email: '', password: '' } },
    userList: { error: false, loading: false, users: [] },
    editUser: { error: false, loading: false, user: {} }
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

//EDIT USER
export const editUser = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: false, loading: true, user: {} } }
}

export const editUserSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: false, loading: false, user: action.user } }
}

export const editUserError = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: true, loading: false, user: {} } }
}

//FETCH USER
export const fetchUser = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: false, loading: true, user: {} } }
}

export const fetchUserSuccess = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: false, loading: false, user: action.user } }
}

export const fetchUserError = (state = INITIAL_STATE, action) => {
    return { ...state, editUser: { error: true, loading: false, user: {} } }
}

export const HANDLER = {
    [UserTypes.CREATE_SUCCESS]: createSuccess,
    [UserTypes.CREATE_USER]: createUser,
    [UserTypes.CREATE_ERROR]: createError,
    [UserTypes.FETCH_USERS]: fetchUsers,
    [UserTypes.FETCH_USERS_SUCCESS]: fetchUsersSuccess,
    [UserTypes.FETCH_USERS_ERROR]: fetchUsersError,
    [UserTypes.EDIT_USER]: editUser,
    [UserTypes.EDIT_USER_SUCCESS]: editUserSuccess,
    [UserTypes.EDIT_USER_ERROR]: editUserError,
    [UserTypes.FETCH_USER]: fetchUser,
    [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
    [UserTypes.FETCH_USER_ERROR]: fetchUserError
}

export default createReducer(INITIAL_STATE, HANDLER)

