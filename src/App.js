import "./App.css";
import { Route, Routes, BrowserRouter} from "react-router-dom";
import Login from "./pages/Login";
import {  useState } from "react";
import { ProtectedRoute } from "./components/ProtectedRoute";
import Home from "./pages/Home";
import "./components/fontawesome";
import SideBar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ErrorPage from "./pages/ErrorPage";
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
    <div className="App">
      <BrowserRouter>
      {user ? (
        <Home>
        <SideBar logout={logout}/>
          <MainContent>
          <Routes>
          <Route element={<ProtectedRoute user={user}/>} >
              <Route path='/' element={<h1>INDEX</h1>} />
              <Route path='/index' element={<h1>INDEX</h1>} />
              <Route path='/clientes' element={<ErrorPage/>} />
          </Route>
          </Routes>
          </MainContent>
        </Home>
      ):(
      <Routes>
        <Route path='/Login' element={<Login login={login} user={user} />} />
        <Route path='/' element={<Login login={login} user={user} />} />
        <Route path='*'  element={<Login login={login} user={user} />} />
      </Routes>
      )
      }
      </BrowserRouter>
    </div>
  );
}

export default App;
