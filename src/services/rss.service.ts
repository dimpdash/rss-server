import { HttpException } from '@exceptions/HttpException';
import { Feed } from '@/interfaces/feed.interface';
import feedModel from '@models/rss.model';
import { isEmpty } from '@utils/util';

class FeedService {
  public feed: Feed = feedModel;



  public async getRss(): Promise<Feed> {
    const rss: string = this.feed.rss2();
    return rss;
  }

  public async addItem(item: Item): void{
    this.feed.addItem(item);
  }

}

export default FeedService;
