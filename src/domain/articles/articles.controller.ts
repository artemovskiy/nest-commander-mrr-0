import { Controller, ForbiddenException, Post } from '@nestjs/common';
import { GrantsService } from '../../infrastructure/grants.service';

@Controller('article')
export class ArticlesController {
  constructor(private readonly grantsService: GrantsService) {}

  @Post()
  createArticle() {
    const grants = this.grantsService.getGrants();
    if (!grants.edit) {
      throw new ForbiddenException('You have not appropriate grant');
    }

    // publishing article

    return {
      id: 1337,
      createdAt: new Date(),
    };
  }
}
