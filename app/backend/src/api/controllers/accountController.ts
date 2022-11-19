import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import accountService from "../services/accountService";

class AccountController {
  constructor(private service = accountService) { }

  public create = async (_req: Request, res: Response) => {
    const request = await this.service.create();
    return res.status(StatusCodes.CREATED).json(request);
  };

  public getOne = async (req: Request, res: Response) => {
    const request = await this.service.getOne(req.params.id);
    return res.status(StatusCodes.OK).json(request);
  };

  public update = async (req: Request, res: Response) => {
    const { balance } = req.body;
    const { id } = req.params;
    const request = await this.service.update(id, balance);
    return res.status(StatusCodes.OK).json(request);
  };
}

export default new AccountController();
