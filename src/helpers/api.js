import { Cookies } from "react-cookie";


export const 
GET = "GET",
POST = "POST",
PUT = "PUT",
DELETE = "DELETE",
PATCH = "PATCH",
// PROTOCOL = "https://",
// HOST = "persidpanute.maemm.xyz",
PROTOCOL = "http://",
HOST = "127.0.0.1:8000",
DOMAIN = `${PROTOCOL}${HOST}`,
API_URL = `${DOMAIN}/api`,
SIGNUP = `${API_URL}/signup`,
LOGIN = `${API_URL}/login`,
LOGOUT = `${API_URL}/logout`

;

export const cookies = new Cookies();

export default {
   GET,
   POST,
   PUT,
   DELETE,
   PATCH,
   PROTOCOL,
   HOST,
   DOMAIN,
   API_URL,
   SIGNUP,
   LOGIN,
   LOGOUT,
}     