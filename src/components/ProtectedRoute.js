import { Navigate ,Outlet} from "react-router-dom"
export const ProtectedRoute=({user,children})=>{
    //si no hay usuario navegamos al login
    if(!user){
        return <Navigate to="/Login"/>
    }
    //si hay un children retornamos el children si no regresamos Outlet, que regresa varias vistas
    return children ? children : <Outlet/>
} 