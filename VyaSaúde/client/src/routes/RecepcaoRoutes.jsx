import { Routes, Route } from "react-router-dom";
import AccessControl from "../pages/AccessControl.jsx"; // Verifica se o usuário logado pode acessar a página.

// ROTAS: RECEPCAO
import Recepcao_home from "../pages/recepcao/Recepcao_home.jsx";
import Recepcao_homeUsuario from "../pages/recepcao/Recepcao_home-usuario.jsx";
import Recepcao_homeEndereco from "../pages/recepcao/Recepcao_home-endereco.jsx";
import Recepcao_cadUsuario from "../pages/recepcao/Recepcao_cad-usuario.jsx";
import Recepcao_altUsuario from "../pages/recepcao/Recepcao_alt-usuario.jsx";
import Recepcao_histConsultas from "../pages/recepcao/Recepcao_hist-consultas.jsx";
import Recepcao_perfil from "../pages/recepcao/Recepcao_perfil.jsx";
import Recepcao_dashboards from "../pages/recepcao/Recepcao_dashboards.jsx";

export default function RecepcaoRoutes() {
	return (
		<Routes>
			{/* Rotas: Recepcao */}
			<Route
				path="/Recepcao_home"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_home />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_home-usuario"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_homeUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_home-endereco"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_homeEndereco />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_cad-usuario"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_cadUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_alt-usuario"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_altUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_hist-consultas"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_histConsultas />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_perfil"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_perfil />
					</AccessControl>
				}
			/>
			<Route
				path="/Recepcao_dashboards"
				element={
					<AccessControl tipoPermitido="recepcao">
						<Recepcao_dashboards />
					</AccessControl>
				}
			/>
		</Routes>
	);
}
