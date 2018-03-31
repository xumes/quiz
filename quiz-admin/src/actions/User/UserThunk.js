import { default as UserActions } from './UserAction' 
import { createUser, fetchUsers, deleteUser } from './UserAPI' 

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