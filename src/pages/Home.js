import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";
import ErrorPage from "./ErrorPage";
import { ProtectedRoute } from "../components/ProtectedRoute";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
function Home({ user, children }) {
  
  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
        <SideBar/>
        <MainContent>
          {children}
        </MainContent>
      </div>
    </div>
  );
}

export default Home;
