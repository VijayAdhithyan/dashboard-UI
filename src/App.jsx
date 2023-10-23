import SideBar from "./components/sideBar/SideBar";
import Dashboard from "./components/dashboard/Dashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <div className="home-page">
      <SideBar className="side" />
      <Dashboard className="dash" />
    </div>
  );
}

export default App;
