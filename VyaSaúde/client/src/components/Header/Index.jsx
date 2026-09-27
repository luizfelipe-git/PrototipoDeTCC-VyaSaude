import './Index.css';
import { getUser } from '../../helpers/auth.js';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import logo from "../../../public/logo.svg";
import placeholder from "../../../public/placeholder.png";
import { IoMdExit } from "react-icons/io";

function Header() {
   const navigate = useNavigate();

   const [usuario, setUsuario] = useState();

   useEffect(() => {
      function obterUsuario() {
         const usuario = getUser();
         setUsuario(usuario);
      }
      obterUsuario();
   }, []);


   useEffect(() => {
      async function redirecionar() {
         if (usuario === null) {
            handleLogout();
         }
      }
      redirecionar();
   }, [usuario === null]);


   const homeNavigate = () => {     //  Função pra redirecionar pra Home de acordo com o usuário
      if (usuario.tipoUsuario) {
         navigate(`/${usuario.tipoUsuario}_home`);
      }
   };

   const profileNavigate = () => {
      if (usuario.tipoUsuario) {
         navigate(`/${usuario.tipoUsuario}_perfil`);
      }
   }

   
   const handleLogout = () => {     //  Função pra remover o token quando deslogar, e redirecionar pra tela de Login
      navigate("/login");
      sessionStorage.removeItem("token");
   };


   return (
      <header className='header'>
         <div className='logo_div cursorPointer' onClick={homeNavigate}>
            <img src={logo} alt="Logo"/>
            <div className="titulosEstilo2 tituloLogo">VyaSaúde</div>
         </div>
         <div className='accountmenu_div'>
            {/* <p>Tempo restante da sessão: {tempoRestante}</p> */}
            <div className='cursorPointer' onClick={profileNavigate}>
               <img className='accountmenu_img' src={placeholder} alt="Placeholder" />
            </div>
            <span>{usuario?.nome}</span>
            <div className='cursorPointer' onClick={handleLogout}>
               <IoMdExit color="white" size={50} />
            </div>
         </div>
      </header>
   )
};

export default Header;