import axios from 'axios'

export default () => {
  return axios.create({
    baseURL: 'http://platform.ceit.aut.ac.ir:50008/api/v1/'
  })
}
