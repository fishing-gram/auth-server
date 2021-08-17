import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { RequestWithUser } from '@interfaces/auth.interface';
import { User } from '@interfaces/users.interface';
import AuthService from '@services/auth.service';

class AuthController {
  public authService = new AuthService();

  /**
   * @url /auth/signup
   * @method POST
   * @description 회원가입
   */
  public signUp = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const signUpUserData: User = await this.authService.signUp(userData);

      res.status(201).json({ data: signUpUserData, message: 'signUp' });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @url /auth/signin
   * @method POST
   * @description 로그인
   */
  public signIn = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: CreateUserDto = req.body;
      const { cookie, findUser } = await this.authService.signIn(userData);

      res.setHeader('Set-Cookie', [cookie]);
      res.status(200).json({ data: findUser, message: 'signIn' });
    } catch (error) {
      next(error);
    }
  };

  /**
   * @url /auth/signout
   * @method GET
   * @description 로그아웃
   */
  public signOut = async (req: RequestWithUser, res: Response, next: NextFunction): Promise<void> => {
    try {
      const userData: User = req.user;
      const logOutUserData: User = await this.authService.signOut(userData);

      res.setHeader('Set-Cookie', ['Authorization=; Max-age=0']);
      res.status(200).json({ data: logOutUserData, message: 'signOut' });
    } catch (error) {
      next(error);
    }
  };
}

export default AuthController;
