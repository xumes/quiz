import { default as UserActions } from './UserAction' 
import { createUser, fetchUsers, fetchUser, deleteUser, editUser } from './UserAPI' 

export function thunkCreateUser(user) {
    return async (dispatch) => {
        dispatch(UserActions.createUser(true))
        try {
            let res = await createUser(user)
            dispatch(UserActions.createSuccess(res.data))
            dispatch(thunkFetchUserList())
        } catch (err) {
            dispatch(UserActions.createUser(false))
            dispatch(UserActions.createError(true))
        }
        
    }
}

export function thunkFetchUserList() {
    return async (dispatch) => {
        dispatch(UserActions.fetchUsers(true))
        try {
            let res = await fetchUsers()
            dispatch(UserActions.fetchUsersSuccess(res.data.users))
        } catch (err) {
            console.log(err)
            dispatch(UserActions.fetchUsers(false))
            dispatch(UserActions.fetchUsersError(true))
        }
        
    }
}

export function thunkFetchUser(id) {
    return async (dispatch) => {
        dispatch(UserActions.fetchUser(true))
        try {
            let res = await fetchUser(id)
            dispatch(UserActions.fetchUserSuccess(res.data.user))
        } catch (err) {
            console.log(err)
            dispatch(UserActions.fetchUser(false))
            dispatch(UserActions.fetchUserError(true))
        }
    }
}

export function thunkDeleteUser(user) {
    return async (dispatch) => {
        dispatch(UserActions.deleteUser(true))
        try {
            let res = await deleteUser(user)
            dispatch(UserActions.deleteUserSuccess())
            dispatch(thunkFetchUserList())
        } catch (err) {
            console.log(err)
            dispatch(UserActions.deleteUser(false))
            dispatch(UserActions.deleteUserError(true))
        }
        
    }
}