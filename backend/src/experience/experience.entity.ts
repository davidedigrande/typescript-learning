import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';


@Entity()
export class ExperienceEntity {
  @PrimaryGeneratedColumn() id: number
  @Column() type: string
  @Column() title: string
  @Column() institution: string
  @Column() description: string
  @Column() startDate: Date
  @Column() endDate: Date
  @Column() location: string
  @Column() ongoing: boolean
}