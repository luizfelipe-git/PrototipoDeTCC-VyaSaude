import '../../Sidenav/Index.css';
import { Link } from "react-router-dom";

import UserManagerIcon from '../iconsSideBar/UserManagerIcon.png';
import dashIcon        from '../iconsSideBar/dashIcon.png';
import home            from '../iconsSideBar/Home.png';

// Página Inicial
// Perfil
// Dashboards

function Sidenav() {
   return (
      <aside className="sidenav">
         <div className="sidenav-content">
            <div className='sidenav-group1'>
               
               <div className='sidenav-buttons'>
                  <img src={home} className="sideBarIcon"/>
                  <Link to="/Admin_home">
                  <p>Página Inicial</p></Link>
               </div>

            </div>

            <div className='sidenav-group2'>

               <div className='sidenav-buttons'>
                  <img src={UserManagerIcon} className="sideBarIcon"/>
                  <Link to="/Admin_perfil">
                  <p>Meu Perfil</p></Link>
               </div>

               <div className='sidenav-buttons'>
                  <img src={dashIcon} className="sideBarIcon"/>
                  <Link to="/Admin_dashboards">
                  <p>Dashboards</p></Link>
               </div>

            </div>

         </div>
      </aside>
   )
};

export default Sidenav;