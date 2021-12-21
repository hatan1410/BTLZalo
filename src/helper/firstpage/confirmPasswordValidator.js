export function confirmPasswordValidator(password, confirmPassword) {
  if (password != confirmPassword) return "Password does not match"
  return ''
}
