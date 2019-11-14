export class Course {

    id: number;
    name: string;
    workload: number;

    constructor(id?: number, name?: string, workload?: number) {
        this.id = id;
        this.name = name;
        this.workload = workload;
    }


}