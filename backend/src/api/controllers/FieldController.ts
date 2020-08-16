import { Model, Document, MongooseFilterQuery } from "mongoose";
import { Request, Response, NextFunction } from "express";

class FieldController {
  Model: Model<Document, {}>;

  constructor(Model: Model<Document, {}>) {
    this.Model = Model;
  }

  public getFields = async (
    req: Request,
    res: Response,
    next: NextFunction,
    query: MongooseFilterQuery<Pick<Document, "_id">> = {}
  ) => {
    const fields = await this.Model.find(query).lean().exec();
    res.json(fields);
  };
}

export default FieldController;
