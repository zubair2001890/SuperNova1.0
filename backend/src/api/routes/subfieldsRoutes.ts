import { Router } from "express";
import SubfieldsController from "../controllers/SubfieldController";

const Controller = new SubfieldsController();

export default (publicApi: Router) => {
  publicApi
    .route("/fields/:field/subfields")
    .get(Controller.getSubfieldsOfField);
};
