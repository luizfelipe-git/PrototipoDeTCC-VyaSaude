import { Routes, Route } from "react-router-dom";
import AccessControl from "../pages/AccessControl.jsx"; // Verifica se o usuário logado pode acessar a página.

// ROTAS: GERENTE
import Gerente_home from "../pages/gerente/Gerente_home.jsx";
import Gerente_homeUsuario from "../pages/gerente/Gerente_home-usuario.jsx";
import Gerente_homeEndereco from "../pages/gerente/Gerente_home-endereco.jsx";
import Gerente_cadUsuario from "../pages/gerente/Gerente_cad-usuario.jsx";
import Gerente_altUsuario from "../pages/gerente/Gerente_alt-usuario.jsx";
import Gerente_histVisitas from "../pages/gerente/Gerente_hist-visitas.jsx";
import Gerente_histConsultas from "../pages/gerente/Gerente_hist-consultas.jsx";
import Gerente_perfil from "../pages/gerente/Gerente_perfil.jsx";
import Gerente_dashboards from "../pages/gerente/Gerente_dashboards.jsx";

export default function GerenteRoutes() {
	return (
		<Routes>
			{/* Rotas: Gerente */}
			<Route
				path="/Gerente_home"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_home />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_home-usuario"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_homeUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_home-endereco"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_homeEndereco />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_cad-usuario"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_cadUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_alt-usuario"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_altUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_hist-visitas"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_histVisitas />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_hist-consultas"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_histConsultas />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_perfil"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_perfil />
					</AccessControl>
				}
			/>
			<Route
				path="/Gerente_dashboards"
				element={
					<AccessControl tipoPermitido="gerente">
						<Gerente_dashboards />
					</AccessControl>
				}
			/>
		</Routes>
	);
}
