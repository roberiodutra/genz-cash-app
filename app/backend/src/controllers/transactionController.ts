import { Request, Response } from "express";
import { StatusCodes } from 'http-status-codes';
import transactionService from "../services/transactionService";

class TransactionController {
  constructor(private service = transactionService) { }

  public create = async (req: Request, res: Response) => {
    const request = await this.service.create(req.body);
    return res.status(StatusCodes.CREATED).json(request);
  };

  public getAll = async (_req: Request, res: Response) => {
    const request = await this.service.getAll();
    return res.status(StatusCodes.OK).json(request);
  };

  public getOne = async (req: Request, res: Response) => {
    const request = await this.service.getOne(req.params.id);
    return res.status(StatusCodes.OK).json(request);
  };

  public update = async (req: Request, res: Response) => {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(request);
  };
}

export default new TransactionController();
