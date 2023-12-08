import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AppRepository } from './app.repository';
import { ExperienceModule } from './experience/experience.module';


@Module({
  imports: [
    AppRepository,
    ExperienceModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}



