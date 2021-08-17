import { NextFunction, Request, Response } from 'express';

class AuthController {
  /**
   * @url /login/kakao
   * @method POST
   * @description 카카오 로그인
   */
  public kakao = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };

  /**
   * @url /login/naver
   * @method POST
   * @description 네이버 로그인
   */
  public naver = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      res.sendStatus(200);
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
