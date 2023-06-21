import axios from "axios";

const BASE_URL ="https://youtube138.p.rapidapi.com"

const options = {
    method: 'GET',
    params: {
      // q: 'desp',
      hl: 'en',
      gl: 'US'
    },
    headers: {
      'X-RapidAPI-Key':'36674d259dmsh20bd13f3e0736eap195a73jsnbc9636624ca8',
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
    }
  };
  export const fetchDataFromApi = async (url) => {
      
    const {data} = await  axios.get(`${BASE_URL}/${url}`,options)
    return data;
  }
  export default fetchDataFromApi;