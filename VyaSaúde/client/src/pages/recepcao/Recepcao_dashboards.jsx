import "./Recepcao.css";
import Header from "../../components/Header/Index.jsx";
import Sidenav from "../../components/Sidenav/Sidenav_recepcao/Index.jsx";

import { Link, useNavigate  } from "react-router-dom";

function Recepcao_dashboards() {
   return(
      <div className="app">
         <Header/>
         <Sidenav/>
         <main className="content-home">
            <div className="title_Home">
               <h1><b>Página Inicial</b><br/>(Recepção)</h1>
            </div>
            <div className="grid-container_Home admin_home_grid">

            </div>
         </main>
      </div>
   )
}

export default Recepcao_dashboards;