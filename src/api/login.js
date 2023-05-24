import { opInfo } from "./request";

const getInfoApi = () => {
  return opInfo({
    url: '/users'||'/admin'||'/department',
    method: 'GET'
  })
}
const postInfoApi = (data) => {
  return opInfo({
    url: '/users'||'/admin'||'/department',
    method: 'POST',
    data: data
  })
}
export { getInfoApi, postInfoApi }
