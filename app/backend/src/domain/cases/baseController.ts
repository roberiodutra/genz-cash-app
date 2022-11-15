import { Request, Response } from "express";

class BaseController {
  constructor(service) {
    this.service = service;
  }

  async create(req: Request, res: Response) {
    const request = await this.service.create(req.body);
    return res.status(201).json(request);
  }

  async getAll(_req: Request, res: Response) {
    const request = await this.service.getAll();
    return res.status(200).json(request);
  }

  async getOne(req: Request, res: Response) {
    const request = await this.service.getOne(req.params.id);
    return res.status(200).json(request);
  }

  async update(req: Request, res: Response) {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(200).json(request);
  }

  async delete(req: Request, res: Response) {
    const request = await this.service.delete(req.params.id);
    return res.status(200).json(request);
  }
}

export default BaseController;
