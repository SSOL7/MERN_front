

const baseUrl = 'http://localhost:3001/surveys'
const create = todo_object => {
  return axios.post(baseUrl, todo_object)
}

export default {
    create: create
}