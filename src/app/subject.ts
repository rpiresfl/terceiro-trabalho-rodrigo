export class Subject {

    id: number;
    name: string;
    workload: number;
    period: number;
    course_fk: number;

    constructor(id?: number, name?: string, workload?: number, period?: number, course_fk?: number) {
        this.id = id;
        this.name = name;
        this.workload = workload;
        this.period = period;
        this.course_fk = course_fk;
    }

}