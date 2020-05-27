const axios = require('axios')

const querystring = require('querystring')
const apiUrl = 'https://api.elderscrollslegends.io/v1/cards'

export const cardsMixin = {
  methods: {
    getCards (page = 1) {
      const params = {
        page,
        pageSize: 20
      }
      const queryString = querystring.stringify(params)
      return axios.get(`${apiUrl}/?${queryString}`)
    },
    searchCardsByName(name, page = 1){
      const params = {
        name,
        page,
        pageSize: 20
      }
      const queryString = querystring.stringify(params)
      return axios.get(`${apiUrl}/?${queryString}`)
    }
      //,
    // searchCards(data) {
    //     let params = Object.assign({}, data);
    //     params['key'] = apikey;
    //     params['pageSize'] = 20;
    //     Object.keys(params).forEach(key => {
    //         if (!params[key]) {
    //             delete params[key];
    //         }
    //     })
    //     const queryString = querystring.stringify(params);
    //     return axios.get(`${apiUrl}/?${queryString}`);
    // }
  }
}
