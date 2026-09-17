import { getUser } from "../helpers/auth.js";

export function usePermissao(tipoPermitido) {
   const usuario = getUser();
   if (!usuario) return false;

   console.log("usuario usePermissao", usuario)

   return usuario.tipoPermitido === tipoPermitido;
}