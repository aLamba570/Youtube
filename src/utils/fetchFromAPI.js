import axios from 'axios';

export const BASE_URL =  'https://youtube-v31.p.rapidapi.com';
const options = {
  url: BASE_URL,
  params: {
    maxResults: '50', 
  },
  headers: {
    'X-RapidAPI-Key': '60ca9ce9c6msh18eb0df64639fe4p193665jsnd999bc5ce225',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};



// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};