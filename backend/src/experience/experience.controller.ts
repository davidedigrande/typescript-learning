import { Controller, Get, Req, Delete } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { Body, Post, Param, Request, Query } from '@nestjs/common';
import { Logger } from '@nestjs/common';
import { ExperienceDto } from './experience.dto';
import { ExperienceRequest } from './experience.request';
import { ExperienceResponse } from './experience.response';

@Controller('experience')
export class ExperienceController {

    private readonly logger = new Logger(ExperienceController.name)

    constructor(private readonly experienceService: ExperienceService) { }

    async createMany(experienceRequest: ExperienceRequest[]): Promise<ExperienceResponse[]> {
        let experienceDto = experienceRequest.map(
            request => {
                return new ExperienceDto(
                    request.type,
                    request.institution,
                    request.title,
                    request.description,
                    request.startDate,
                    request.endDate,
                    request.location,
                    request.ongoing
                )
            })

        return this.experienceService.createMany(experienceDto)
    }

    async createOne(experienceRequest: ExperienceRequest): Promise<ExperienceResponse> {
        let experienceDto = new ExperienceDto(
            experienceRequest.type,
            experienceRequest.institution,
            experienceRequest.title,
            experienceRequest.description,
            experienceRequest.startDate,
            experienceRequest.endDate,
            experienceRequest.location,
            experienceRequest.ongoing
        )

        return this.experienceService.createOne(experienceDto)
    }

    @Post()
    async create(@Body() experienceRequest: ExperienceRequest | ExperienceRequest[]): Promise<ExperienceResponse | ExperienceResponse[]> {
        if (Array.isArray(experienceRequest)) {
            return this.createMany(experienceRequest)
        } else {
            return this.createOne(experienceRequest)
        }
    }

    @Get()
    async find(@Query('type') type?: string): Promise<ExperienceResponse | ExperienceResponse[]> {
        let experienceDto = await this.experienceService.find(type)
        let experienceResponse =
            experienceDto.map(experienceDto => {
                return <ExperienceResponse>{
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
        return experienceResponse
    }

    @Delete(':id')
    async delete(@Query('id') id: number): Promise<void> {
        return this.experienceService.remove(id)
    }

    @Delete()
    async clear(): Promise<void> {
        return this.experienceService.clear()
    }

}