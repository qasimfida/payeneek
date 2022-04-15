import Axios  from 'axios';

const axios =  Axios.create({
    baseURL: 'http://localhost:4000',
    timeout: 1000,
    headers: {'X-Custom-Header': 'foobar'}
  });

export default axios;