import axios from "axios";

const url = "http://localhost:5000/departments"

export const getAllDepartments = () => axios.get(url)