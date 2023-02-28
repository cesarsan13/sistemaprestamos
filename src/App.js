import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import "./components/icons";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
function App() {
  const [user, setuser] = useState(null);

  const login = (evt) => {
    evt.preventDefault();
    setuser({
      id: 1,
      name: "admin",
    });
  
  };
  const logout = (evt) => {
    evt.preventDefault();

    setuser(null);
  };

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/Login" element={<Login login={login} user={user} />}></Route>
          <Route path="*" element={<Login login={login} user={user} />}></Route>
            <Route element={<ProtectedRoute user={user}/>}>
                <Route path="/home" element={
                  <Home user={user} >
                    <h1>home</h1>
                  </Home>} />
                  <Route path="/clientes" element={
                  <Home user={user} >
                    <h1>clientes</h1>
                  </Home>} />
            </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
