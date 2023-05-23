

import { NextFunction, Request, Response } from 'express';
import { InferType } from 'yup';

export default class HandlersClass {
  path: string;
  scheme?: InferType<any>;
  post?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
  get?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
  put?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
  delete?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;

  constructor(options: {
    path: string;
    scheme?: InferType<any>;
    post?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
    get?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
    put?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
    delete?: (req: Request, res: Response, next: NextFunction) => Promise<Response>;
  }) {
    this.path = options.path;
    this.scheme = options?.scheme;
    this.post = options?.post;
    this.get = options?.get;
    this.put = options?.put;
    this.delete = options?.delete;
  }
}
