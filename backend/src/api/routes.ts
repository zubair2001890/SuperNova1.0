import paymentRoutes from "./routes/paymentRoutes";
import projectRoutes from "./routes/projectRoutes";
import profileRoutes from "./routes/profileRoutes";
import fieldsRoutes from "./routes/fieldsRoutes";
import subfieldsRoutes from "./routes/subfieldsRoutes";
import * as Express from "express";
import { Express as IExpress } from "express";

export default (publicApi: Express.Router, privateApi: Express.Router) => {
  paymentRoutes(publicApi, privateApi);
  projectRoutes(publicApi, privateApi);
  profileRoutes(publicApi, privateApi);
  fieldsRoutes(publicApi);
  subfieldsRoutes(publicApi);
};
