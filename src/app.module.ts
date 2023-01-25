import { Module } from '@nestjs/common';
import { ArticlesModule } from './domain/articles/articles.module';
import { ScheduleModule } from '@nestjs/schedule';

@Module({
  imports: [ArticlesModule, ScheduleModule.forRoot()],
})
export class AppModule {}
