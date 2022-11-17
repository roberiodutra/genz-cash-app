import { StatusCodes } from "http-status-codes";

export enum ErrorTypes {
  UserExists = 'UserExists',
  UserNotFound = 'UserNotFound',
  WrongPassword = 'WrongPassword',
  TokenNotFound = 'TokenNotFound',
  InvalidToken = 'InvalidToken',
}

type ErrorResponseObject = {
  message: string;
  code: number;
};

type catalog = {
  [key in ErrorTypes]: ErrorResponseObject
};

export const ErrorCatalog: catalog = {
  UserExists: {
    message: 'User Already Exists',
    code: StatusCodes.CONFLICT,
  },
  UserNotFound: {
    message: 'User Not found',
    code: StatusCodes.NOT_FOUND,
  },
  WrongPassword: {
    message: 'Wrong Password',
    code: StatusCodes.UNAUTHORIZED,
  },
  TokenNotFound: {
    message: 'Token Not Found',
    code: StatusCodes.NOT_FOUND,
  },
  InvalidToken: {
    message: 'Invalid Token',
    code: StatusCodes.UNAUTHORIZED,
  },
};
