import { create } from "apisauce"

const api = create({
    baseURL: 'https://newsapi.org/v2',

})
const apiKey = '?country=us&apiKey=121c0a2c4d354b03acf1500b313fa0d3'
const getHeadline = () => api.get('/top-headlines'+apiKey)

export default {
    getHeadline
}

//   https://newsapi.org/v2/top-headlines?country=us&apiKey=121c0a2c4d354b03acf1500b313fa0d3
