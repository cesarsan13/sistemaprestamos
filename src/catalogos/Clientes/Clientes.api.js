import axios from "axios";

const createNewClient= async (customer) =>{
    return await axios.post("http://localhost:8000/api/customer",customer);
}