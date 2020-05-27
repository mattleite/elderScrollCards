const pageSize = '?pageSize=20'
const url = 'https://api.elderscrollslegends.io/v1/cards'

export const HTTP = axios.create({
  baseURL: url + pageSize,
})