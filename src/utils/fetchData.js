import axios from "axios";
const BASE_URL = 'https://youtube-v31.p.rapidapi.com/';
export const fetchData = async (url) => {
  const resp = await axios.get(`${BASE_URL}${url}`, {
    params: {
      maxResults: 20
    },
    headers: {
      'X-RapidAPI-Key': '6c47d04026msh6a2abf1a36e9985p1fc65fjsnbe84fc568ee6',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  })

  return resp.data;
}