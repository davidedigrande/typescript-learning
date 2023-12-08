import { Module } from '@nestjs/common';
import { ExperienceController } from './experience.controller';
import { ExperienceService } from './experience.service';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExperienceEntity } from "./experience.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([ExperienceEntity]),
  ],
  controllers: [ExperienceController],
  providers: [ExperienceService],
  exports: [ExperienceService]
})
export class ExperienceModule { }


