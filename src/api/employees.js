import axios from 'axios'

const url = "http://localhost:5000/employees"

export const getAllEmployees = () => axios.get(url)
export const createNewEmployee = (newEmployee) => axios.post(url, newEmployee)
export const getSingleEmployee = (id) => axios.get(`${url}/${id}`)