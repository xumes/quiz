import axios from 'axios'

const URL = 'http://localhost:7000'

export const createUser = async (user) => {
    const url = `${URL}/users`

    return await axios.post(url, {name: user.name, email: user.email, password: user.password || ''})
}

export const fetchUsers = async () => {
    const url = `${URL}/users`

    return await axios.get(url)
}

export const deleteUser = async (user) => {
    const { _id } = user
    const url = `${URL}/users/${_id}`

    return await axios.delete(url)
}