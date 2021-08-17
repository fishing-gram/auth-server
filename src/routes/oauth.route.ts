import { Router } from 'express';
import OauthController from '@controllers/oauth.controller';
import { Routes } from '@interfaces/routes.interface';
import oauthMiddleware from '@middlewares/oauth.middleware';

class AuthRoute implements Routes {
  public path = '/';
  public router = Router();
  public oauthController = new OauthController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}kakao`, oauthMiddleware.kakao, this.oauthController.kakao);
    this.router.get(`${this.path}naver`, oauthMiddleware.naver, this.oauthController.naver);
  }
}

export default AuthRoute;
