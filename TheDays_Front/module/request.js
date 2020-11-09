import axios from 'axios';


export const request = axios.create({
  // Should chnage to environment variable
  baseURL: process.env.REMOTE_SERVER !== undefined ? process.env.REMOTE_SERVER :
    process.env.NODE_ENV === 'production'
      ? process.env.REMOTE_SERVER || 'http://0.0.0.0:80/'
      : process.env.REMOTE_SERVER || 'http://0.0.0.0:80/'
});