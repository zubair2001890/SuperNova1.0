import { Router } from "express";
import FieldsController from "../controllers/FieldsController";

const controller = new FieldsController();

export default (publicApi: Router) => {
  publicApi.route("/fields").get(controller.getFields);
};
