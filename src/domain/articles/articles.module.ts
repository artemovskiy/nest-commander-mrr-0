import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { PublishDelayedArticlesCommand } from './publish-delayed-articles.command';
import { ArticlesCleanupService } from './articles-cleanup.service';

@Module({
  imports: [InfrastructureModule],
  providers: [PublishDelayedArticlesCommand, ArticlesCleanupService],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
