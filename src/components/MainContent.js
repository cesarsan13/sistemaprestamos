import { Outlet } from "react-router-dom";

function MainContent({children}){
    return (
    <div className="col py-3">
      {children}
    </div>
    );
}

export default MainContent;