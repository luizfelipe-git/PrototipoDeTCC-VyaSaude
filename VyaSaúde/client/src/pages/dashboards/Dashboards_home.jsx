import "./Agente.css";
import Header from "../../components/Header/Index.jsx";
import Sidenav from "../../components/Sidenav/Sidenav_agente/Index.jsx";
import { Link, useNavigate  } from "react-router-dom";

function Dashboards_home() {
   return(
      <div className="app">
         <Header/>
         <Sidenav/>
         <main className="content-home">
            <div className="title_Home">
               <h1><b>Página Inicial</b><br/>(Agente)</h1>
            </div>

            <div className="grid-container_Home agente-home">

            </div>
         </main>
      </div>
   )
}

export default Dashboards_home;