import { Request, Response } from "express";
import accountService from "../services/accountService";

class AccountController {
  constructor(private service = accountService) { }

  public create = async (_req: Request, res: Response) => {
    const request = await this.service.create();
    return res.status(201).json(request);
  };

  public getOne = async (req: Request, res: Response) => {
    const request = await this.service.getOne(req.params.id);
    return res.status(200).json(request);
  };

  public update = async (req: Request, res: Response) => {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(200).json(request);
  };
}

export default new AccountController();
