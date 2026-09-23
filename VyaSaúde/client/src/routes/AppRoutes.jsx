import { Routes, Route } from "react-router-dom";

// ROTAS COMUNS
import Login from "../pages/login/Login.jsx";
import Recuperar from "../pages/login/Recuperar.jsx";
import Cadastro from "../pages/login/Cadastro.jsx";
import Ajuda from "../pages/ajuda/Ajuda.jsx";
// import LandingPage from "../pages/landingPage/LandingPage.jsx";

// ROTAS ESPECÍFICAS
import AdminRoutes from "../routes/AdminRoutes.jsx";
import AgenteRoutes from "../routes/AgenteRoutes.jsx";
import GerenteRoutes from "../routes/GerenteRoutes.jsx";
import RecepcaoRoutes from "../routes/RecepcaoRoutes.jsx";
import PacienteRoutes from "../routes/PacienteRoutes.jsx";

export default function AppRoutes() {
	return (
		<Routes>
			{/* Rotas Comuns */}
			<Route
				path="/"
				element={<Login />}
			/>
			<Route
				path="/login"
				element={<Login />}
			/>
			<Route
				path="/cadastro"
				element={<Cadastro />}
			/>
			<Route
				path="/recuperar"
				element={<Recuperar />}
			/>
			<Route
				path="/ajuda"
				element={<Ajuda />}
			/>
			{/* <Route
				path="/landingPage"
				element={<LandingPage />}
			/> */}

			{/* Rotas Específicas */}
			<Route
				path="/agente/*"
				element={<AgenteRoutes />}
			/>
			<Route
				path="/admin/*"
				element={<AdminRoutes />}
			/>
			<Route
				path="/gerente/*"
				element={<GerenteRoutes />}
			/>
			<Route
				path="/recepcao/*"
				element={<RecepcaoRoutes />}
			/>
			<Route
				path="/paciente/*"
				element={<PacienteRoutes />}
			/>
		</Routes>
	);
}
