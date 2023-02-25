import { Navigate ,Outlet} from "react-router-dom"
export const ProtectedRoute=({user,children})=>{
    console.log(user)
    if(!user){
        return <Navigate to="/Login"/>
    }
    return children ? children : <Outlet/>
} 