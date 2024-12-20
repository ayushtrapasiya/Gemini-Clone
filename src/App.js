import { useState } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Searchbar from "./Components/Searchbar/Searchbar";
import Showans from "./Components/Showans/Showans";
import Sidebar from "./Components/Sidebar/Sidebar";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  let [toggle ,  settoggle] = useState(false)
  return (
    <div className="App">
      <div className={toggle ? 'toggle-sidebar' : 'sidebar-part'}>
        <Sidebar toggle={toggle} settoggle={settoggle}/>
      </div>
      <div className="right-part">
        <Header />
        <Showans/>
        <Searchbar/>
      </div>
    </div>
  );
}

export default App;
