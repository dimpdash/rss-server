import { Router } from 'express';
import RssController from '@controllers/rss.controller';
import { Routes } from '@interfaces/routes.interface';

class FeedRoute implements Routes {
  public path = '/';
  public router = Router();
  public feedController = new RssController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}feed/rss`, this.feedController.getRss)
    this.router.post(`${this.path}feed/addItem`, this.feedController.addItem)
  }
}

export default FeedRoute;