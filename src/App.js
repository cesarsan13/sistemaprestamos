import './App.css';
import { Route,Routes,BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import { useState } from 'react';
import { ProtectedRoute } from './components/ProtectedRoute';
import Home from './pages/Home';
function App() {
  const [user, setuser] = useState(null);

  const login = (evt) =>{
    evt.preventDefault();
    setuser({
      id:1,
      name:'admin'
    });

  }
  const logout = (evt) =>{
    evt.preventDefault();

    setuser(null);
  }
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login login={login} user={user}/>}> </Route>
        <Route path="*" element={<Login login={login} user={user}/>}></Route>
        <Route path="/home" element={
        <ProtectedRoute user={user} >
          <Home logout={logout} />
        </ProtectedRoute>
        }>

        </Route>
      </Routes>
    </BrowserRouter>
   
  );
}

export default App;
