import "./Agente.css";
import Header from "../../components/Header/Index.jsx";
import Sidenav from "../../components/Sidenav/Sidenav_agente/Index.jsx";
import PageWIP from "../../components/PageWIP/Index.jsx";
import ButtonBack from "../../components/ButtonBack/Index.jsx"
import { Link  } from "react-router-dom";

function Agente_altUsuario() {
   return(
      <div className="app">
         <Header/>
         <Sidenav/>
         <main className="content-home" style={{position: "relative"}}>
            <Link to="/Agente_home" className="backButton">
               <ButtonBack />
            </Link>

            <PageWIP/>
            
         </main>
      </div>
   )
}

export default Agente_altUsuario;