import axios from "axios";


let url = ""
if(process.env.NODE_ENV === "development") {
    console.log("DEVELOPMENT")
    url = "http://localhost:5000/employees"
} else {  
    console.log("PRODUCTION")
    url = "https://mighty-peak-10043.herokuapp.com/employees"
}

export const getAllEmployees = () => axios.get(url)
export const createNewEmployee = (newEmployee) => axios.post(url, newEmployee)
export const getSingleEmployee = (id) => axios.get(`${url}/${id}`)