import axios from "axios";

const Api = axios.create({
    baseURL: "http://localhost:5000",
    withCredentials: true,
    headers :{
        "Content-Type" : "multipart/form-data"
    }
})

// configuration for axios
const config = {
    headers :{
        'authorization' : `Bearer ${localStorage.getItem('token')}`
    }
}

// Creating test api
export const testApi = () => Api.get("/test")
// http://localhost:5000//test

//  Creating register api
export const registerApi = (data) => Api.post("/api/user/create", data)

// Create login api
export const loginApi = (data) => Api.post("/api/user/login", data)

// create change password api
export const changePasswordApi = (data) => Api.post("/api/user/changepassword", data)

// create product API
export const createProductApi = (formData) => Api.post('/api/product/create_product', formData, config)

// get products API
export const getAllProductsApi = () => Api.get('/api/product/get_products')

// get single product API
export const getSingleProductApi = (id) => Api.get(`/api/product/get_product/${id}`)

// update product
export const updateProductApi 
        = (id, formData) => Api.put(`/api/product/update_product/${id}`, formData, config)

// delete product
export const deleteProductApi = (id) => Api.delete(`/api/product/delete_product/${id}`, config)