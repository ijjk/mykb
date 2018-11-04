export default req => {
  if (req) return req.jwt
  if (typeof window !== 'undefined') {
    return window.localStorage.getItem('jwt')
  }
}
