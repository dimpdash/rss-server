import { NextFunction, Request, Response } from 'express';
import { CreateUserDto } from '@dtos/users.dto';
import { Rss } from '@interfaces/rss.interface';
import rssService from '@services/rss.service';

class RssController {
  public rssService = new rssService();

  public getRss = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const rss: Rss = await this.rssService.getRss();

      res.status(200).send(rss)
    } catch (error) {
      next(error);
    }
  };

}
export default RssController;
