export function getAuthHeader() {
    let user = localStorage.getItem('user')

    if (!user) {
        return {}
    }

    return { 'Authorization': 'JWT ' + user } //o espaço após o JWT é obrigatório
}