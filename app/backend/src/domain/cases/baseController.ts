import { Request, Response } from "express";
import Users from "../../database/models/Users";
import BaseService from "./baseService";

// class BaseController {
// private service: BaseService;
// constructor() {
//   this.service = new BaseService();
// }

// async create(req: Request, res: Response) {
//   const request = await this.service.create(req.body);
//   return res.status(201).json(request);
// }

const getAll = async (_req: Request, res: Response) => {
  const request = await Users.findAll();
  return res.status(200).json(request);
};

// async getOne(req: Request, res: Response) {
//   const request = await this.service.getOne(req.params.id);
//   return res.status(200).json(request);
// }

// async update(req: Request, res: Response) {
//   const request = await this.service.update(req.params.id, req.body);
//   return res.status(200).json(request);
// }

// async delete(req: Request, res: Response) {
//   const request = await this.service.delete(req.params.id);
//   return res.status(200).json(request);
// }
// }

export default getAll;
