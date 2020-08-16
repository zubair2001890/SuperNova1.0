import FieldController from "./FieldController";
import { Request, Response, NextFunction } from "express";
import { model } from "mongoose";

const Subfield = model("SubField");

class SubfieldsController extends FieldController {
  constructor() {
    super(Subfield);
  }

  getSubfieldsOfField = (req: Request, res: Response, next: NextFunction) => {
    const { field } = req.params;
    const query = { field };
    return this.getFields(req, res, next, query);
  };
}

export default SubfieldsController;
