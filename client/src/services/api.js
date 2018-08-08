import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://185.116.162.237:7070/api/v1/'
  })
}
