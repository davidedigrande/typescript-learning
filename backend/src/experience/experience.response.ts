export class ExperienceResponse {
    constructor(
        public type: string,
        public institution: string,
        public title: string,
        public description: string,
        public startDate: Date,
        public endDate: Date,
        public location: string,
        public ongoing: boolean,
    ) {}
}