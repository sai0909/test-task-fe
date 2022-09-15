import api from '.'

const URL = '/users?per_page=10'
const END_POINT = '/users'

// Get All  Users from the api
function getAllUsers () {
  return api.get(URL)
}

// Get  User details
function getUser (UserId) {
    console.log(UserId,"UserId")
  return api.get(`${END_POINT}/${UserId}`)
}

// Get  User detail - repo
function getUserRepos (UserId) {
    console.log(UserId,"UserId")
  return api.get(`${END_POINT}/${UserId}/repos`)
}


export { getAllUsers, getUser,getUserRepos }
