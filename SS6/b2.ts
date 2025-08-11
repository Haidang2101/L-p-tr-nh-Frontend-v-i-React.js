abstract class Job {
    type: string
    constructor(type: string) {
        this.type = type;
    }
    printType(): string {
        return `Job Type: ${this.type}`;
    }
    abstract calculateSalary(): number;
}

class PartimeJob extends Job {
    workingHour: number
    constructor(workingHour: number) {
        super("Part-time");
        this.workingHour = workingHour;
    }
    calculateSalary(): number {
        return this.workingHour * 30000; 
    }
}

class FulltimeJob extends Job {
    constructor() {
        super("Full-time");
    }
    calculateSalary(): number {
        return 10000000; 
    }
}

const partTimeJob = new PartimeJob(5);
const fullTimeJob = new FulltimeJob();
console.log(partTimeJob.printType());
console.log(partTimeJob.calculateSalary());

console.log(fullTimeJob.printType());
console.log(fullTimeJob.calculateSalary());