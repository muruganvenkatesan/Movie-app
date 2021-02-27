import axios from 'axios';
import API_CONFIG from './api.config';
export const getAllMovieCase = () => {
    try {
    const response = axios.get(API_CONFIG.DISCOVER, {
        params: {
            api_key: API_CONFIG.API_KEY,
            language:"en-US",
            sort_by:"popularity.desc",
            include_video:false,
            page:1,
        }
      });
      return response;
    } catch (error){}
}

