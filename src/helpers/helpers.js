import { Cookies } from "react-cookie";
import Swal from "sweetalert2";
const cookies = new Cookies();

export const setCookies= async (data)=>{
    console.log(data);
    cookies.set("isAuth",data.token);
    cookies.set("ap_paterno",data.data.ap_paterno);
    cookies.set("ap_materno",data.data.ap_materno);
    cookies.set("nombres",data.data.nombres);
    cookies.set("email",data.data.email);
    cookies.set("username",data.data.username);
}

export const swal = (title,text,timer,icon)=>{
    Swal.fire({
        title:title,
        text:text,
        timer:timer,
        icon:icon
    })
}