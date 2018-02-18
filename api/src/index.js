import subjects from './subjects/index'
import users from './users/index'

export default (app) => {
    app.use('/subjects', subjects)
    app.use('/users', users)
}