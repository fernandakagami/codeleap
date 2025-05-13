export function signUp(username) {
  return localStorage.setItem("username", username)
}