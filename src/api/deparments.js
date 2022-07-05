import axios from "axios";

let url = ""
if(process.env.NODE_ENV === "development") {
    console.log("DEVELOPMENT")
    url = "http://localhost:5000/departments"
} else {
    
    console.log("PRODUCTION")
    url = "https://mighty-peak-10043.herokuapp.com/departments"
}


export const getAllDepartments = () => axios.get(url)