import axios from "axios";



export const Client = axios.create({
  baseURL: "http://localhost:5000" ,
  headers:{
    'Content-Type': 'multipart/form-data'
  }
});


