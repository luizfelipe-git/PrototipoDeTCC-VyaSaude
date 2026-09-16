import "./App.css"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer }     from "react-toastify";
import AccessControl          from './pages/AccessControl.jsx'; // Verifica se o usuário logado pode acessar a página.

// ROTAS: LOGIN
import Login                  from './pages/login/Login.jsx'
import Recuperar              from './pages/login/Recuperar.jsx'
import Cadastro               from './pages/login/Cadastro.jsx'

// ROTAS: ajuda
import LandPage               from './pages/landpage/LandPage.jsx'
import Ajuda                  from './pages/ajuda/Ajuda.jsx'

// ROTAS: ADMINISTRADOR
import Admin_home             from './pages/admin/Admin_home.jsx'
import Admin_homeUsuario      from './pages/admin/Admin_home-usuario.jsx'
import Admin_homeEndereco     from './pages/admin/Admin_home-endereco.jsx'
import Admin_cadUsuario       from './pages/admin/Admin_cad-usuario.jsx'
import Admin_cadEndereco      from './pages/admin/Admin_cad-endereco.jsx'
import Admin_altUsuario       from './pages/admin/Admin_alt-usuario.jsx'
import Admin_histVisitas      from './pages/admin/Admin_hist-visitas.jsx'
import Admin_histConsultas    from './pages/admin/Admin_hist-consultas.jsx'
import Admin_bDados           from './pages/admin/Admin_b-dados.jsx'
import Admin_perfil           from './pages/admin/Admin_perfil.jsx'
import Admin_dashboards       from './pages/admin/Admin_dashboards.jsx'

// ROTAS: GERENTE
import Gerente_home           from './pages/gerente/Gerente_home.jsx'
import Gerente_homeUsuario    from './pages/gerente/Gerente_home-usuario.jsx'
import Gerente_homeEndereco   from './pages/gerente/Gerente_home-endereco.jsx'
import Gerente_cadUsuario     from './pages/gerente/Gerente_cad-usuario.jsx'
import Gerente_altUsuario     from './pages/gerente/Gerente_alt-usuario.jsx'
import Gerente_histVisitas    from './pages/gerente/Gerente_hist-visitas.jsx'
import Gerente_histConsultas  from './pages/gerente/Gerente_hist-consultas.jsx'
import Gerente_perfil         from './pages/gerente/Gerente_perfil.jsx'
import Gerente_dashboards     from './pages/gerente/Gerente_dashboards.jsx'

// ROTAS: AGENTE
import Agente_home            from './pages/agente/Agente_home.jsx'
import Agente_homeUsuario     from './pages/agente/Agente_home-usuario.jsx'
import Agente_homeEndereco    from './pages/agente/Agente_home-endereco.jsx'
import Agente_cadUsuario      from './pages/agente/Agente_cad-usuario.jsx'
import Agente_altUsuario      from './pages/agente/Agente_alt-usuario.jsx'
import Agente_histVisitas     from './pages/agente/Agente_hist-visitas.jsx'
import Agente_histConsultas   from './pages/agente/Agente_hist-consultas.jsx'
import Agente_perfil          from './pages/agente/Agente_perfil.jsx'
import Agente_dashboards      from './pages/agente/Agente_dashboards.jsx'
import Agente_noPage          from './pages/agente/Agente_noPage.jsx'

// ROTAS: RECEPCAO
import Recepcao_home          from './pages/recepcao/Recepcao_home.jsx'
import Recepcao_homeUsuario   from './pages/recepcao/Recepcao_home-usuario.jsx'
import Recepcao_homeEndereco  from './pages/recepcao/Recepcao_home-endereco.jsx'
import Recepcao_cadUsuario    from './pages/recepcao/Recepcao_cad-usuario.jsx'
import Recepcao_altUsuario    from './pages/recepcao/Recepcao_alt-usuario.jsx'
import Recepcao_histConsultas from './pages/recepcao/Recepcao_hist-consultas.jsx'
import Recepcao_perfil        from './pages/recepcao/Recepcao_perfil.jsx'
import Recepcao_dashboards    from './pages/recepcao/Recepcao_dashboards.jsx'

// ROTAS: PACIENTE
import Paciente_home          from './pages/paciente/Paciente_home.jsx'
// import Paciente_homeUsuario   from './pages/paciente/Paciente_home-usuario.jsx'
// import Paciente_homeEndereco  from './pages/paciente/Paciente_home-endereco.jsx'
import Paciente_altUsuario    from './pages/paciente/Paciente_alt-usuario.jsx'
import Paciente_histConsultas from './pages/paciente/Paciente_hist-consultas.jsx'
import Paciente_perfil        from './pages/paciente/Paciente_perfil.jsx'
import Paciente_dashboards    from './pages/paciente/Paciente_dashboards.jsx'


function App() {
   return (
      <Router>
         <Routes>
            
            {/* Rotas: Login */}
            <Route path="/"                           element={<Login />} />
            {/* <Route path="/"                           element={<LandPage />} /> */}
            <Route path="/login"                      element={<Login />} />
            <Route path="/cadastro"                   element={<Cadastro />} />
            <Route path="/recuperar"                  element={<Recuperar />} />
            
            {/* Rotas: ajuda */}
            <Route path="/ajuda"                      element={<Ajuda />} />

            {/* Rotas: Administrador */}
            <Route path="/Admin_home"                 element={<AccessControl    tipoPermitido="admin"><Admin_home />               </AccessControl>} />
            <Route path="/Admin_home-usuario"         element={<AccessControl    tipoPermitido="admin"><Admin_homeUsuario />        </AccessControl>} />
            <Route path="/Admin_home-endereco"        element={<AccessControl    tipoPermitido="admin"><Admin_homeEndereco />       </AccessControl>} />
            <Route path="/Admin_cad-usuario"          element={<AccessControl    tipoPermitido="admin"><Admin_cadUsuario />         </AccessControl>} />
            <Route path="/Admin_cad-endereco"         element={<AccessControl    tipoPermitido="admin"><Admin_cadEndereco />        </AccessControl>} />
            <Route path="/Admin_alt-usuario"          element={<AccessControl    tipoPermitido="admin"><Admin_altUsuario />         </AccessControl>} />
            <Route path="/Admin_hist-visitas"         element={<AccessControl    tipoPermitido="admin"><Admin_histVisitas />        </AccessControl>} />
            <Route path="/Admin_hist-consultas"       element={<AccessControl    tipoPermitido="admin"><Admin_histConsultas />      </AccessControl>} />
            <Route path="/Admin_b-dados"              element={<AccessControl    tipoPermitido="admin"><Admin_bDados />             </AccessControl>} />
            <Route path="/Admin_perfil"               element={<AccessControl    tipoPermitido="admin"><Admin_perfil />             </AccessControl>} />
            <Route path="/Admin_dashboards"           element={<AccessControl    tipoPermitido="admin"><Admin_dashboards />         </AccessControl>} />

            {/* Rotas: Gerente */}
            <Route path="/Gerente_home"               element={<AccessControl    tipoPermitido="gerente"><Gerente_home />           </AccessControl>} />
            <Route path="/Gerente_home-usuario"       element={<AccessControl    tipoPermitido="gerente"><Gerente_homeUsuario />    </AccessControl>} />
            <Route path="/Gerente_home-endereco"      element={<AccessControl    tipoPermitido="gerente"><Gerente_homeEndereco />   </AccessControl>} />
            <Route path="/Gerente_cad-usuario"        element={<AccessControl    tipoPermitido="gerente"><Gerente_cadUsuario />     </AccessControl>} />
            <Route path="/Gerente_alt-usuario"        element={<AccessControl    tipoPermitido="gerente"><Gerente_altUsuario />     </AccessControl>} />
            <Route path="/Gerente_hist-visitas"       element={<AccessControl    tipoPermitido="gerente"><Gerente_histVisitas />    </AccessControl>} />
            <Route path="/Gerente_hist-consultas"     element={<AccessControl    tipoPermitido="gerente"><Gerente_histConsultas />  </AccessControl>} />
            <Route path="/Gerente_perfil"             element={<AccessControl    tipoPermitido="gerente"><Gerente_perfil />         </AccessControl>} />
            <Route path="/Gerente_dashboards"         element={<AccessControl    tipoPermitido="gerente"><Gerente_dashboards />     </AccessControl>} />
            
            {/* Rotas: Agente */}
            <Route path="/Agente_home"                element={<AccessControl    tipoPermitido="agente"><Agente_home />             </AccessControl>} />
            <Route path="/Agente_home-usuario"        element={<AccessControl    tipoPermitido="agente"><Agente_homeUsuario />      </AccessControl>} />
            <Route path="/Agente_home-endereco"       element={<AccessControl    tipoPermitido="agente"><Agente_homeEndereco />     </AccessControl>} />
            <Route path="/Agente_cad-usuario"         element={<AccessControl    tipoPermitido="agente"><Agente_cadUsuario />       </AccessControl>} />
            <Route path="/Agente_alt-usuario"         element={<AccessControl    tipoPermitido="agente"><Agente_altUsuario />       </AccessControl>} />
            <Route path="/Agente_hist-visitas"        element={<AccessControl    tipoPermitido="agente"><Agente_histVisitas />      </AccessControl>} />
            <Route path="/Agente_hist-consultas"      element={<AccessControl    tipoPermitido="agente"><Agente_histConsultas />    </AccessControl>} />
            <Route path="/Agente_perfil"              element={<AccessControl    tipoPermitido="agente"><Agente_perfil />           </AccessControl>} />
            <Route path="/Agente_dashboards"          element={<AccessControl    tipoPermitido="agente"><Agente_dashboards />       </AccessControl>} />
            <Route path="/Agente_noPage"              element={<AccessControl    tipoPermitido="agente"><Agente_noPage />            </AccessControl>} />

            {/* Rotas: Recepcao */}
            <Route path="/Recepcao_home"              element={<AccessControl    tipoPermitido="recepcao"><Recepcao_home />         </AccessControl>} />
            <Route path="/Recepcao_home-usuario"      element={<AccessControl    tipoPermitido="recepcao"><Recepcao_homeUsuario />  </AccessControl>} />
            <Route path="/Recepcao_home-endereco"     element={<AccessControl    tipoPermitido="recepcao"><Recepcao_homeEndereco /> </AccessControl>} />
            <Route path="/Recepcao_cad-usuario"       element={<AccessControl    tipoPermitido="recepcao"><Recepcao_cadUsuario />   </AccessControl>} />
            <Route path="/Recepcao_alt-usuario"       element={<AccessControl    tipoPermitido="recepcao"><Recepcao_altUsuario />   </AccessControl>} />
            <Route path="/Recepcao_hist-consultas"    element={<AccessControl    tipoPermitido="recepcao"><Recepcao_histConsultas/> </AccessControl>} />
            <Route path="/Recepcao_perfil"            element={<AccessControl    tipoPermitido="recepcao"><Recepcao_perfil />       </AccessControl>} />
            <Route path="/Recepcao_dashboards"        element={<AccessControl    tipoPermitido="recepcao"><Recepcao_dashboards />   </AccessControl>} />
            
            {/* Rotas: Paciente */}
            <Route path="/Paciente_home"              element={<AccessControl    tipoPermitido="paciente"><Paciente_home />         </AccessControl>} />
            <Route path="/Paciente_alt-usuario"       element={<AccessControl    tipoPermitido="paciente"><Paciente_altUsuario />   </AccessControl>} />
            <Route path="/Paciente_hist-consultas"    element={<AccessControl    tipoPermitido="paciente"><Paciente_histConsultas/> </AccessControl>} />
            <Route path="/Paciente_perfil"            element={<AccessControl    tipoPermitido="paciente"><Paciente_perfil />       </AccessControl>} />
            <Route path="/Paciente_dashboards"        element={<AccessControl    tipoPermitido="paciente"><Paciente_dashboards />   </AccessControl>} />

         </Routes>
         <ToastContainer/>
      </Router>
   );
}



export default App