import axios from "axios"

const API = axios.create({baseURL: "http://localhost:5000/test"})

export const getTest = () => API.get("/")
export const postTest = () => API.post("/")