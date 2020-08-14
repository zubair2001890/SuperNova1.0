import "../models/Field";
import FieldController from "./FieldController";
import { model } from "mongoose";

const Field = model("fields");

class FieldsController extends FieldController {
  constructor() {
    super(Field);
  }
}

export default FieldsController;
