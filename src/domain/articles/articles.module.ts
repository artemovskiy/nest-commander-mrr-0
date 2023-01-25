import { Module } from '@nestjs/common';
import { ArticlesController } from './articles.controller';
import { InfrastructureModule } from '../../infrastructure/infrastructure.module';

@Module({
  imports: [InfrastructureModule],
  controllers: [ArticlesController],
})
export class ArticlesModule {}
