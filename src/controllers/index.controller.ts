import { NextFunction, Request, Response } from 'express';

class IndexController {
  /**
   * @url /
   * @method GET
   * @description Health check
   */
  public index = (req: Request, res: Response, next: NextFunction): void => {
    try {
      res.status(200).json({ message: 'health Check' });
    } catch (error) {
      next(error);
    }
  };
}

export default IndexController;
