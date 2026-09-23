import { Routes, Route } from "react-router-dom";
import AccessControl from "../pages/AccessControl.jsx"; // Verifica se o usuário logado pode acessar a página.

// ROTAS: PACIENTE
import Paciente_home from "../pages/paciente/Paciente_home.jsx";
// import Paciente_homeUsuario   from '../pages/paciente/Paciente_home-usuario.jsx';
// import Paciente_homeEndereco  from '../pages/paciente/Paciente_home-endereco.jsx';
import Paciente_altUsuario from "../pages/paciente/Paciente_alt-usuario.jsx";
import Paciente_histConsultas from "../pages/paciente/Paciente_hist-consultas.jsx";
import Paciente_perfil from "../pages/paciente/Paciente_perfil.jsx";
import Paciente_dashboards from "../pages/paciente/Paciente_dashboards.jsx";

export default function PacienteRoutes() {
	return (
		<Routes>
			{/* Rotas: Paciente */}
			<Route
				path="/Paciente_home"
				element={
					<AccessControl tipoPermitido="paciente">
						<Paciente_home />
					</AccessControl>
				}
			/>
			<Route
				path="/Paciente_alt-usuario"
				element={
					<AccessControl tipoPermitido="paciente">
						<Paciente_altUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Paciente_hist-consultas"
				element={
					<AccessControl tipoPermitido="paciente">
						<Paciente_histConsultas />
					</AccessControl>
				}
			/>
			<Route
				path="/Paciente_perfil"
				element={
					<AccessControl tipoPermitido="paciente">
						<Paciente_perfil />
					</AccessControl>
				}
			/>
			<Route
				path="/Paciente_dashboards"
				element={
					<AccessControl tipoPermitido="paciente">
						<Paciente_dashboards />
					</AccessControl>
				}
			/>
		</Routes>
	);
}
