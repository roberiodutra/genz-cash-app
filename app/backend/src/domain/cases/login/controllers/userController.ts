import { Request, Response } from "express";
import UserService from "../services/userService";

class UserController {
  constructor(private service = UserService) { }

  public create = async (req: Request, res: Response) => {
    const request = await this.service.create(req.body);
    return res.status(201).json(request);
  };

  public getAll = async (_req: Request, res: Response) => {
    const request = await this.service.getAll();
    return res.status(200).json(request);
  };

  public getOne = async (req: Request, res: Response) => {
    const request = await this.service.getOne(req.params.id);
    return res.status(200).json(request);
  };

  public update = async (req: Request, res: Response) => {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(200).json(request);
  };

  public delete = async (req: Request, res: Response) => {
    const request = await this.service.delete(req.params.id);
    return res.status(200).json(request);
  };
}

export default new UserController();
