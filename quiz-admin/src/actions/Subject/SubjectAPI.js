import axios from 'axios'

const URL = 'http://localhost:7000'

export const createSubject = async (subject) => {
    const url = `${URL}/subjects`

    return await axios.post(url, {name: subject.name, description: subject.description || ''})
}