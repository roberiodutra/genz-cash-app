import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { ErrorCatalog, ErrorTypes } from '../helpers/ErrorCatalog';
import { ZodError } from 'zod';
import { StatusCodes } from 'http-status-codes';

const ErrorHandler: ErrorRequestHandler = (
  err: Error | ZodError,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ZodError) {
    const response = err.issues.map((z) => z.message);
    return res.status(StatusCodes.BAD_REQUEST).json({ message: response });
  }
  const messageAsErrorType = err.message as keyof typeof ErrorTypes;
  const mappedError = ErrorCatalog[messageAsErrorType];

  if (mappedError) {
    const { code, message } = mappedError;
    return res.status(code).json({ message });
  }

  return res.status(
    StatusCodes.INTERNAL_SERVER_ERROR
  ).json({ message: 'Internal Error' });
};

export default ErrorHandler;
