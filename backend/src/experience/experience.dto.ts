export class ExperienceDto {
    constructor(
        public type: string,
        public institution: string,
        public title: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public location: string = "",
        public ongoing: boolean = false,
    ) {
        this.type = type.trim().toLowerCase()
        this.institution = institution.trim().toLowerCase().charAt(0).toUpperCase() + institution.slice(1)
        this.title = title.trim().toLowerCase().charAt(0).toUpperCase() + title.slice(1)
        this.description = description.trim().toLowerCase().charAt(0).toUpperCase() + description.slice(1)
        this.location = location.trim().toLowerCase().charAt(0).toUpperCase() + location.slice(1)
    }
}