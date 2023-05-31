import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import "./components/fontawesome";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import CCLientes from "./catalogos/Clientes/CClientes";
import "../src/main.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import CUsuarios from "./catalogos/CUsuarios";
import CSocios from "./catalogos/CSocios";
import axios from "axios";
import { setCookies } from "./helpers/helpers";
import { swal } from "./helpers/helpers";
import { Cookies } from "react-cookie";
const cookies = new Cookies();

function App() {
  const [user, setuser] = useState({ username: "", password: "" });
  const [isAuth, setisAuth] = useState(null);

  const onTextChanged = (event) => {  
    const { name, value } = event.target;
    console.log(name, value);
    setuser((prevstate) => {
      return {
        ...prevstate,
        [name]: value,
      };
    });
  };

  const login = async (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    try {
      const res = await axios
        .post("http://127.0.0.1:8000/api/login", formData)
        // .post("http://192.168.100.64:8000/api/login", formData)
      const {data} = res;
      if(!data) return ;
      await setCookies(data)
      setisAuth(data.token);
      //alert("hey");
      
    } catch (error) {
      //alert(error);
      swal(
        "Error",
        error.response.data.message,
        0,
        'error'
      );
      console.log(error.response.data)
    }
  };

  const logout = (evt) => {
    evt.preventDefault();
    setuser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {cookies.get("isAuth") ? (
          <Home>
            <SideBar logout={logout} />
            <MainContent>
              <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                  <Route path="/Clientes" element={<CCLientes />} />
                  <Route path="/Usuarios" element={<CUsuarios />} />
                  <Route path="/Socios" element={<CSocios />} />
                  <Route path="/Pagos" element={<h1>Pagos</h1>} />
                </Route>
              </Routes>
            </MainContent>
          </Home>
        ) : (
          <Routes>
            <Route
              path="/Login"
              element={
                <Login
                  login={login}
                  user={user}
                  onTextChanged={onTextChanged}
                  setuser={setuser}
                  isAuth={isAuth}
                />
              }
            />
            <Route
              path="/"
              element={
                <Login
                  login={login}
                  user={user}
                  onTextChanged={onTextChanged}
                  setuser={setuser}
                  isAuth={isAuth}
                />
              }
            />
            <Route
              path="*"
              element={
                <Login
                  login={login}
                  user={user}
                  onTextChanged={onTextChanged}
                  setuser={setuser}
                  isAuth={isAuth}
                />
              }
            />
          </Routes>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
