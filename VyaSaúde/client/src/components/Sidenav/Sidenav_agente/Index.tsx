import '../../Sidenav/Index.css';
// import "./Index.css";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { TbCalendarUser } from "react-icons/tb";
import { LuCalendarClock } from "react-icons/lu";
import { GroupAdd, QueryStats, Badge } from '@mui/icons-material';

export function SidenavAgente() {
   return (
      <aside className="sidenav">
         <div className="sidenav-content">
            <div className='sidenav-group1'>
               <Link to="/agente/home">
                  <div className='sidenav-buttons'>
                     <FaHome className="sideBarIcon" />
                     <p>Página Inicial</p>
                  </div>
               </Link>

               <Link to="/agente/paciente">
                  <div className='sidenav-buttons'>
                     <GroupAdd fontSize="large" className="sideBarIcon" />
                     <p>Gerenciar Pacientes</p>
                  </div>
               </Link>

               <Link to="/agente/endereco">
                  <div className='sidenav-buttons'>
                     <FaMapMarkerAlt className="sideBarIcon" />
                     <p>Gerenciar Endereços</p>
                  </div>
               </Link>

               <Link to="/agente/historico-consultas">
                  <div className='sidenav-buttons'>
                     <LuCalendarClock className="sideBarIcon" />
                     <p>Histórico de Consultas</p>
                  </div>
               </Link>

               <Link to="/agente/historico-visitas">
                  <div className='sidenav-buttons'>
                     <TbCalendarUser className="sideBarIcon" />
                     <p>Agenda de Visitas</p>
                  </div>
               </Link>
            </div>

            <div className='sidenav-group2'>
               <Link to="/agente/perfil">
                  <div className='sidenav-buttons'>
                     <Badge fontSize="large" className="sideBarIcon" />
                     <p>Perfil</p>
                  </div>
               </Link>

               <Link to="/agente/dashboards">
                  <div className='sidenav-buttons'>
                     <QueryStats fontSize="large" className="sideBarIcon" />
                     <p>Dashboards</p>
                  </div>
               </Link>
            </div>
         </div>
      </aside>
   )
};