import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';
import { PublishDelayedArticlesCommand } from './publish-delayed-articles.command';

@Module({
  imports: [InfrastructureModule],
  providers: [PublishDelayedArticlesCommand],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
