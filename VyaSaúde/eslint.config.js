import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
   { 
      files: ["**/*.{js,mjs,cjs,jsx}"],
      ...js.configs.recommended,
      plugins: { js }, 
      extends: ["js/recommended"], 
      languageOptions: { 
         globals: {...globals.node, ...globals.browser}
      }, 
   },
   pluginReact.configs.flat.recommended,
   {
      files: ["**/*.{jsx,js}"],
      rules: {
      "react/react-in-jsx-scope": "off",
      },
   },
]);
