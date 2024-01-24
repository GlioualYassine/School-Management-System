import axios from 'axios'
import Cookies from 'js-cookie';
export const axiosClient = axios.create({
    baseURL : import.meta.env.VITE_BACKEND_URL,
    headers: {
        'X-XSRF-TOKEN': Cookies.get('XSRF-TOKEN'),
      },
    withCredentials : true
})
//global config for axios