import axios from "axios";

const API_BASE_URL = "http://localhost:8080/products";

export const getProducts = () => {
  return axios.get(`${API_BASE_URL}/all`);
};

export const addProduct = (product) => {
  return axios.post(`${API_BASE_URL}/add`, product);
};

export const getProductById = (id) => {
  return axios.get(`${API_BASE_URL}/id/${id}`);
};

export const searchByName =(name)=>{
 return axios.get(`${API_BASE_URL}/search?name=${name}`);
}

const API_BASE_URL_User = "http://localhost:8080/users";

export const addUser = (user)=>{
  return axios.post(`${API_BASE_URL_User}/register`,user);
}

export const searchByMail =(email,password) =>{
  return axios.post(`${API_BASE_URL_User}/login`,{
    email:email,
    password:password
  });
};

