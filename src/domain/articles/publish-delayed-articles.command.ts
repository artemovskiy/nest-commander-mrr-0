import { Command, CommandRunner } from 'nest-commander';
import { GrantsService } from '../../infrastructure/grants.service';

const delayedArticles = [
  {
    id: 1334,
    authorId: 1,
  },
];

@Command({ name: 'articles:publish-delayed', description: 'A parameter parse' })
export class PublishDelayedArticlesCommand extends CommandRunner {
  constructor(private readonly grantService: GrantsService) {
    super();
  }

  async run(): Promise<void> {
    delayedArticles.forEach((article) => {
      const authorGrants = this.grantService.getGrants(article.authorId);
      if (authorGrants.edit) {
        console.warn(
          'User: ' +
            article.authorId +
            ' has not a grant for delayed publication of artciel: ' +
            article.id,
        );
        return;
      }

      // publish atricle
    });
  }
}
