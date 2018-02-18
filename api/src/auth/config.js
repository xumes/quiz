import { ExtractJwt } from 'passport-jwt'

export default  {
    secretOrKey: 'Who Is Awesome Now ?',
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('JWT')
}