import '../../Sidenav/Index.css';
import { Link } from "react-router-dom";

import UserManagerIcon from '../iconsSideBar/UserManagerIcon.png';
import dashIcon        from '../iconsSideBar/dashIcon.png';
import query           from '../iconsSideBar/query.png';
import AddUserMale     from '../iconsSideBar/AddUserMale.png';
import home            from '../iconsSideBar/Home.png';


// Página Inicial
// Cadastro de Pacientes
// Cadastro de Endereços
// Histórico de Consultas
// Histórico de Visitas
// Perfil
// Dashboards


function Sidenav() {
   return (
      <aside className="sidenav">
         <div className="sidenav-content">
            <div className='sidenav-group1'>
               
               <Link to="/home">
               <div className='sidenav-buttons'>
                  <img src={home} className="sideBarIcon"/>
                  <p>Página Inicial</p>
               </div>
               </Link>

               <Link to="/agente/paciente">
               <div className='sidenav-buttons'>
                  <img src={AddUserMale} className="sideBarIcon"/>
                  <p>Cadastro de Pacientes</p>
               </div>
               </Link>

               <Link to="/agente/endereco">
               <div className='sidenav-buttons'>
                  <img src={home} className="sideBarIcon"/>
                  <p>Cadastro de Endereços</p>
               </div>
               </Link>

               <Link to="/agente/historico-consultas">
               <div className='sidenav-buttons'>
                  <img src={query} className="sideBarIcon"/>
                  <p>Histórico de Consultas</p>
               </div>
               </Link>

               <Link to="/agente/historico-visitas">
               <div className='sidenav-buttons'>
                  <img src={query} className="sideBarIcon"/>
                  <p>Agenda de Visitas</p>
               </div>
               </Link>

            </div>

            <div className='sidenav-group2'>

               <Link to="/agente/perfil">
               <div className='sidenav-buttons'>
                  <img src={UserManagerIcon} className="sideBarIcon"/>
                  <p>Meu Perfil</p>
               </div>
               </Link>

               <Link to="/agente/dashboards">
               <div className='sidenav-buttons'>
                  <img src={dashIcon} className="sideBarIcon"/>
                  <p>Dashboards</p>
               </div>
               </Link>

            </div>

         </div>
      </aside>
   )
};

export default Sidenav;