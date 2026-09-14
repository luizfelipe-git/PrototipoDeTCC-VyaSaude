import 'reflect-metadata';
import { DataSource } from 'typeorm';

import administrador from "../entities/admin.js";
import agente from "../entities/agente.js";
import cbo from "../entities/cbo.js";
import endereco from "../entities/endereco.js";
import gerentePosto from "../entities/gerenteposto.js";
import log_acesso from "../entities/log_acesso.js";
import material_predominante from "../entities/material_predominante.js";
import medico from "../entities/medico.js";
import paciente from "../entities/paciente.js";
import posto from "../entities/postosaude.js";
import profissional from "../entities/profissional.js";
import recepcao from "../entities/recepcao.js";
import registro_atividade from "../entities/registro_atividade.js";
import responsavelPosto from "../entities/responsavelposto.js";
import tipo_animal from "../entities/tipo_animal.js";
import tipo_imovel from "../entities/tipo_imovel.js";
import usuario from "../entities/usuario.js";
import zona from "../entities/zona.js";


const ambienteBanco = Boolean(process.env.MYSQL_ADDON_HOST || process.env.DATABASE_HOST);
if (!ambienteBanco) {
    console.log("Banco de dados conectado.");
}

const AppDataSource = new DataSource({
    type: "mysql",
    host: process.env.MYSQL_ADDON_HOST || process.env.DATABASE_HOST,
    username: process.env.MYSQL_ADDON_USER || process.env.DATABASE_USERNAME,
    port: process.env.MYSQL_ADDON_PORT || process.env.DATABASE_PORT,
    password: process.env.MYSQL_ADDON_PASSWORD || process.env.DATABASE_PASSWORD,
    database: process.env.MYSQL_ADDON_DB || process.env.DATABASE_NAME,
   //  synchronize: false,
   //  logging: true,
    entities: [administrador, agente, cbo, endereco, gerentePosto, log_acesso,material_predominante, medico, paciente, 
      posto, profissional, recepcao, registro_atividade, responsavelPosto, tipo_animal, tipo_imovel, usuario, zona],
    migrations: []
});

export {AppDataSource};