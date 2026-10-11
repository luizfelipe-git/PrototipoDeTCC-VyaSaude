import "./Sidenav.css";
import { SidenavAdmin } from "./Sidenav_admin/Index.jsx";
import { SidenavAgente } from "./Sidenav_agente/Index.tsx";
import { SidenavGerente } from "./Sidenav_gerente/Index.jsx";
import { SidenavPaciente } from "./Sidenav_paciente/Index.jsx";
import { SidenavRecepcao } from "./Sidenav_recepcao/Index.jsx";
import { SidenavVisitante } from "./Sidenav_visitante/Index.jsx";
import { getUser } from "../../helpers/auth.js";

export default function Sidenav() {
   const usuario = getUser();

   switch (usuario?.tipoUsuario) {
      case "admin":
         return <SidenavAdmin />;
      case "agente":
         return <SidenavAgente />;
      case "gerente":
         return <SidenavGerente />;
      case "paciente":
         return <SidenavPaciente />;
      case "recepcao":
         return <SidenavRecepcao />;
      case "visitante":
         return <SidenavVisitante />;
      default:
         return null;
   }
}
