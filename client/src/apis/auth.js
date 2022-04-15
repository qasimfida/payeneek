import axios from '../utils/axios';

export const signUp = (body) => axios.post('/user/signup',body)
export const signIn = (body) => axios.post('/user/signin',body)