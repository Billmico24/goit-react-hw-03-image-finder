
import axios from "axios";




export const fetchImg = async (query, page = 1) => {
    const config = {
    baseURL: 'https://pixabay.com/api/',
    params: {
      key: '29444128-664601f5e312d32a4879ca112',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
      page: page
    },
  };

    const response = await axios.get('/', config);
  return response.data;
};

