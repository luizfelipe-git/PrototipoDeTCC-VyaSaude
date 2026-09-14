// import 'dotenv/config';
import express from "express";
import routes from "./routes/routes.js";
import {AppDataSource} from "./database/data-source.js";
import cors from "cors";

const server = express();
server.use(cors());
server.use(express.json());

const ambiente = process.env.NODE_ENV || 'local';
let dbPromise = null;

server.use(async (req, res, next) => {
   try {
      if (!AppDataSource.isInitialized) {
         if (!dbPromise) {
            console.log(`Inicializando banco de dados no ambiente: [${ambiente.toUpperCase()}]...`);
            dbPromise = AppDataSource.initialize().catch((err) => {
               dbPromise = null;
               throw err;
            });
         }
         await dbPromise;
      };
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
      console.log(`\nServidor rodando no ambiente: [${ambiente.toUpperCase()}], na porta ${PORT} - http://localhost:${PORT}`);
   });
};

export default server;