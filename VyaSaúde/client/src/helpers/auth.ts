import { jwtDecode } from "jwt-decode";

export type TipoUsuario = "admin" | "agente" | "gerente" | "paciente" | "recepcao" | "visitante";

export interface UsuarioLogado {
   cpf: string;
   data_criacao: string;
   email: string;
   nome: string;
   tipoUsuario: TipoUsuario;
}

function getUser(): UsuarioLogado | null {
   const token = sessionStorage.getItem("token");

   if (!token) {
      return null;
   }

   try {
      const decoded = jwtDecode<UsuarioLogado>(token);
      return decoded;
   } catch (err) {
      console.error(err);
      return null;
   }
}

function isAuthenticated(): boolean {
   return !!getUser();
}

export { isAuthenticated, getUser };