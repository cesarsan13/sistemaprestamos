import ClipLoader from "react-spinners/ClipLoader";
import './Loader.css'
const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
function Loader ({loading}){
  
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loader"></div>
        Cargando...
      </div>
    </div>
  );
}
export default Loader;