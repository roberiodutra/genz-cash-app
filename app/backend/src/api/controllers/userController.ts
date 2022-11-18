import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";
import UserService from "../services/userService";

class UserController {
  constructor(private service = UserService) { }

  public login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const userInfo = await this.service.login(username, password);
    return res.status(StatusCodes.OK).json(userInfo);
  };

  public create = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const request = await this.service.create(username, password);
    return res.status(StatusCodes.CREATED).json(request);
  };

  public getAll = async (_req: Request, res: Response) => {
    const request = await this.service.getAll();
    return res.status(StatusCodes.OK).json(request);
  };

  public getOne = async (req: Request, res: Response) => {
    const request = await this.service.getOne(+req.params.id);
    return res.status(StatusCodes.OK).json(request);
  };

  public update = async (req: Request, res: Response) => {
    const request = await this.service.update(req.params.id, req.body);
    return res.status(StatusCodes.OK).json(request);
  };

  public delete = async (req: Request, res: Response) => {
    await this.service.delete(req.params.id);
    return res.status(StatusCodes.NO_CONTENT).end();
  };
}

export default new UserController();
