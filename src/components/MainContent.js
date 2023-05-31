import { Outlet } from "react-router-dom";

function  MainContent({children}){
    return (
      <div className="col p-3 min-vh-100">
        <div className="row justify-content-lg-center">
            {children}

        </div>
      </div>
    );
}

export default MainContent;