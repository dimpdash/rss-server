import { HttpException } from '@exceptions/HttpException';
import { Rss } from '@interfaces/rss.interface';
import rssModel from '@models/rss.model';
import { isEmpty } from '@utils/util';

class RssService {
  public rss = rssModel;

  public async getRss(): Promise<Rss> {
    const users: Rss[] = this.rss;
    return users;
  }

}

export default RssService;
