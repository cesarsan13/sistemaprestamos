import { Outlet } from "react-router-dom";

function MainContent({children}){
    return (
      <div className="col-sm p-3 min-vh-100">
            {children}
      </div>
    // <div className="col py-3">
    //   {children}
    // </div>
    );
}

export default MainContent;