import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import "./components/fontawesome";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import CCLientes from "./catalogos/CClientes";
import "../src/main.css";
import "../node_modules/bootstrap/dist/js/bootstrap";
import CUsuarios from "./catalogos/CUsuarios";
import CSocios from "./catalogos/CSocios";
import axios from "axios";



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
  const setCookies= async(data)=>{
    //cookies.set("prueba","valor de prueba",10)
  }
  const login = async (evt) => {
    evt.preventDefault();
    const formData = new FormData(evt.target);
    try {
      const res = await axios
        .post("http://127.0.0.1:8000/api/login", formData)
      const {data} = res;
      if(!data) return ;
      console.log(data);

      // await setCookies(data);
    } catch (error) {
      console.log(error)      
    }
  };
  const logout = (evt) => {
    evt.preventDefault();
    setuser(null);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isAuth ? (
          <Home>
            <SideBar logout={logout} />
            <MainContent>
              <Routes>
                <Route element={<ProtectedRoute user={user} />}>
                  <Route path="/" element={<h1>INDEX</h1>} />
                  <Route path="/index" element={<h1>INDEX</h1>} />
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
