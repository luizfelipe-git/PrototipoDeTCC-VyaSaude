// import 'dotenv/config';
import express from "express";
import routes from "./routes/routes.js";
import {AppDataSource} from "./database/data-source.js";
import cors from "cors"

const server = express();
server.use(cors());
server.use(express.json());

const ambiente = process.env.NODE_ENV || 'local';
let dbPromise = null;

server.use(async (req, res, next) => {
   try {
      if (!AppDataSource.isInitialized) {
         if (!dbPromise) {
            // console.log("\n====== [DEBUG] VARIÁVEIS CARREGADAS ======");
            // console.log("Ambiente atual (NODE_ENV):", process.env.NODE_ENV);
            // console.log("DATABASE_HOST recebido:", process.env.DATABASE_HOST);
            // console.log("DATABASE_USER recebido:", process.env.DATABASE_USER);
            // console.log("DATABASE_NAME recebido:", process.env.DATABASE_NAME);
            // console.log("DATABASE_PORT recebido:", process.env.DATABASE_PORT);
            // console.log("Tem senha preenchida?:", process.env.DATABASE_PASSWORD ? "Sim ✅" : "Não ❌");
            // console.log("=========================================\n");
            dbPromise = AppDataSource.initialize();
            console.log(`Inicializando banco de dados no ambiente: [${ambiente.toUpperCase()}]...`);
         }
         await dbPromise;
      }
      next();
   } catch (error) {
      console.error("Erro ao conectar no banco de dados:", error);
      return res.status(500).json({ error: "Erro interno no servidor de banco de dados." });
   }
});

server.use("/api/", routes);

if (process.env.NODE_ENV !== 'prod' && !process.env.VERCEL) {
   const PORT = process.env.PORT || 3331;
   server.listen(PORT, () => {
      console.log(`\nServidor rodando no ambiente [${ambiente.toUpperCase()}] na porta ${PORT} - http://localhost:${PORT}`);
   });
}

export default server;