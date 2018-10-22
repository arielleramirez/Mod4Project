export const createUser = (currentUserId) => {
  return {
    type: "CREATE_USER",
    currentUserId
  }
}
