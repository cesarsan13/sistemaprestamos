import SideBar from "../components/Sidebar";
import MainContent from "../components/MainContent";
function Home({logout}) {
  return (
    <div className="container-fluid">
        <div className="row flex-nowrap">
          <SideBar/>
          <MainContent/>
        </div>
    </div>
  );
}

export default Home;
