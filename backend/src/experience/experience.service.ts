import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ExperienceEntity } from './experience.entity';
import { ExperienceDto } from './experience.dto';

@Injectable()
export class ExperienceService {
    constructor(@InjectRepository(ExperienceEntity) private experienceRepository: Repository<ExperienceEntity>) { }

    async clear(): Promise<void> {
        return this.experienceRepository.clear()
    }

    async remove(id: number): Promise<void> {
        let experienceEntity = await this.experienceRepository.findOne({ where: { id } })
        await this.experienceRepository.remove(experienceEntity)
    }

    async find(type?: string): Promise<ExperienceDto[]> {
        let experienceEntity = type
            ? await this.experienceRepository.find( { where: { type }})
            : await this.experienceRepository.find()

        return experienceEntity.map(
            experienceEntity => {
                return new ExperienceDto(
                    experienceEntity.type,
                    experienceEntity.institution,
                    experienceEntity.title,
                    experienceEntity.description,
                    experienceEntity.startDate,
                    experienceEntity.endDate,
                    experienceEntity.location,
                    experienceEntity.ongoing,
                )
            })
    }

    async createOne(experienceDto: ExperienceDto): Promise<ExperienceEntity> {
        let experienceEntity = <ExperienceEntity>{
            type: experienceDto.type,
            institution: experienceDto.institution,
            title: experienceDto.title,
            description: experienceDto.description,
            startDate: experienceDto.startDate,
            endDate: experienceDto.endDate,
            location: experienceDto.location,
            ongoing: experienceDto.ongoing,
        }
        return this.experienceRepository.save(experienceEntity)
    }

    async createMany(experienceDto: ExperienceDto[]): Promise<ExperienceEntity[]> {
        let experienceEntity = experienceDto.map((experienceDto) => {
            return <ExperienceEntity>{
                type: experienceDto.type,
                institution: experienceDto.institution,
                title: experienceDto.title,
                description: experienceDto.description,
                startDate: experienceDto.startDate,
                endDate: experienceDto.endDate,
                location: experienceDto.location,
                ongoing: experienceDto.ongoing,
            }
        })
        return this.experienceRepository.save(experienceEntity)
    }
}