import express, {json} from "express";
import dotenv from "dotenv";
import taskRoute from "./routes/taskRoute.js";
import userRoute from "./routes/userRoute.js";

dotenv.config();
const app = express();

//midleware fromato json
app.use(json());

//midleware para rutas
app.use("/task", taskRoute);
app.use("/user", userRoute);

const port = process.env.PORT;


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
