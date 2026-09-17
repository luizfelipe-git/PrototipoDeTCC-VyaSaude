import "./Ajuda.css";
import Header from "../../components/Header/Index.jsx";
import Sidenav from "../../components/Sidenav/Sidenav_paciente/Index.jsx";
import PageWIP from "../../components/PageWIP/Index.jsx";
import { Link } from "react-router-dom";
import { getUser } from "../../helpers/auth.js";

import more from '../../components/Sidenav/iconsSideBar/more.png';
import AddUserMale     from '../../components/Sidenav/iconsSideBar/AddUserMale.png';
import dashIcon from '../../components/Sidenav/iconsSideBar/dashIcon.png';
import query from '../../components/Sidenav/iconsSideBar/query.png';
import UserManagerIcon from '../../components/Sidenav/iconsSideBar/UserManagerIcon.png';

function ButtonAjuda() {
   const usuario = getUser();

   return(
      <div className="app">
         <Header/>
         <main className="content-home">
            <PageWIP />
            
         </main>
      </div>
   )
}


export default ButtonAjuda;