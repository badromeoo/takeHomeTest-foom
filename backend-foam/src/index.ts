import express from "express";
import sequelize from "./utils/db.js";
import Router from "./routes/routes.ts";
import bodyParser from "body-parser";
import cors from "cors"
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors({origin: "http://localhost:3000"}));
  
async function start() {

  app.get("/", (req, res) => {
    res.send("Hello World");
    console.log("Server Get Req");
  });

  try {
    await sequelize.authenticate();
    console.log("Database connected");
    app.use("/api", Router);
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
}
start();
