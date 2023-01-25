import { Module } from '@nestjs/common';
import { ArticlesModule } from './domain/articles/articles.module';

@Module({
  imports: [ArticlesModule],
})
export class AppModule {}
