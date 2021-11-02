import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Rss } from '@interfaces/rss.interface';
import rssService from '@services/rss.service';
import {Item} from 'feed'
import { logger, stream } from '@utils/logger';

class RssController {
  public rssService = new rssService();

  public getRss = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rss: Rss = await this.rssService.getRss();

      res.status(200).send(rss)
    } catch (error) {
      console.log(error)
      next(error);
    }
  };

  public addItem = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const item: Item = req.body;
      this.rssService.addItem(item);
      logger.info(await this.rssService.getRss())

      res.status(201).json({ data: item, message: 'created' });
    } catch (error) {
      next(error);
    }
  };

}
export default RssController;
