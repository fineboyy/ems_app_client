import axios from "axios";

let url = ""
if(process.env.NODE_ENV === "development") {
    console.log("DEVELOPMENT")
    url = "http://localhost:5000/leave-applications"
} else {
    
    console.log("PRODUCTION")
    url = "https://mighty-peak-10043.herokuapp.com/leave-applications"
}

export const getAllLeaveApplications = () => axios.get(url)