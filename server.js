import express from "express";
import dotenv from "dotenv";
import routes from "./routes/user.routes.js";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(
    `Server is running at PORT ${PORT} in ${process.env.NODE_ENV} environment`
  );
});
