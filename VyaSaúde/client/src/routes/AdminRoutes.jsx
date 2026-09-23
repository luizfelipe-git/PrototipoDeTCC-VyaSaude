import { Routes, Route } from "react-router-dom";
import AccessControl from "../pages/AccessControl.jsx"; // Verifica se o usuário logado pode acessar a página.

// ROTAS: ADMINISTRADOR
import Admin_home from "../pages/admin/Admin_home.jsx";
import Admin_homeUsuario from "../pages/admin/Admin_home-usuario.jsx";
import Admin_homeEndereco from "../pages/admin/Admin_home-endereco.jsx";
import Admin_cadUsuario from "../pages/admin/Admin_cad-usuario.jsx";
import Admin_cadEndereco from "../pages/admin/Admin_cad-endereco.jsx";
import Admin_altUsuario from "../pages/admin/Admin_alt-usuario.jsx";
import Admin_histVisitas from "../pages/admin/Admin_hist-visitas.jsx";
import Admin_histConsultas from "../pages/admin/Admin_hist-consultas.jsx";
import Admin_bDados from "../pages/admin/Admin_b-dados.jsx";
import Admin_perfil from "../pages/admin/Admin_perfil.jsx";
import Admin_dashboards from "../pages/admin/Admin_dashboards.jsx";

export default function AdminRoutes() {
	return (
		<Routes>
			{/* Rotas: Administrador */}
			<Route
				path="/Admin_home"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_home />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_home-usuario"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_homeUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_home-endereco"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_homeEndereco />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_cad-usuario"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_cadUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_cad-endereco"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_cadEndereco />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_alt-usuario"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_altUsuario />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_hist-visitas"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_histVisitas />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_hist-consultas"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_histConsultas />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_b-dados"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_bDados />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_perfil"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_perfil />
					</AccessControl>
				}
			/>
			<Route
				path="/Admin_dashboards"
				element={
					<AccessControl tipoPermitido="admin">
						<Admin_dashboards />
					</AccessControl>
				}
			/>
		</Routes>
	);
}
