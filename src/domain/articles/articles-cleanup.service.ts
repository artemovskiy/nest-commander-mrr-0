import { Injectable } from '@nestjs/common';
import { GrantsService } from '../../infrastructure/grants.service';
import { Cron } from '@nestjs/schedule';

const DELETION_THRESHOLD = 30 * 1000; // we publish articles only for 30 seconds, yeah

const now = Date.now();

const articles = [
  {
    id: 1,
    authorId: 1,
    createdAt: now - 35 * 1000,
  },
  {
    id: 2,
    authorId: 1,
    createdAt: now - 20 * 1000,
  },
  {
    id: 3,
    authorId: 2,
    createdAt: now - 40 * 1000,
  },
];

@Injectable()
export class ArticlesCleanupService {
  constructor(private readonly grantsService: GrantsService) {}

  @Cron('* * * * * *')
  handleCron() {
    const outdatedArticles = articles.filter(
      (a) => a.createdAt < Date.now() - DELETION_THRESHOLD,
    );
    console.log(
      'Wants to delete articles:',
      outdatedArticles.map((a) => a.id).join(', '),
    );
    outdatedArticles.forEach((article) => {
      const authorGrants = this.grantsService.getGrants(article.authorId);
      if (authorGrants.remove) {
        console.warn(
          'User: ' +
            article.authorId +
            ' has not a grant fordeletion his outdated article: ' +
            article.id,
        );
        return;
      }

      // delete article
      console.log('deleted artcile: ' + article.id);
    });
  }
}
