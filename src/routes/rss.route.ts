import { Router } from 'express';
import RssController from '@controllers/rss.controller';
import { Routes } from '@interfaces/routes.interface';

class RssRoute implements Routes {
  public path = '/';
  public router = Router();
  public authController = new RssController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}rss`, this.rssContrller.getRss)
  }
}

export default RssRoute;