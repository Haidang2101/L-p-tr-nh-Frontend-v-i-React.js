var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Job = /** @class */ (function () {
    function Job(type) {
        this.type = type;
    }
    Job.prototype.printType = function () {
        return "Job Type: ".concat(this.type);
    };
    return Job;
}());
var PartimeJob = /** @class */ (function (_super) {
    __extends(PartimeJob, _super);
    function PartimeJob(workingHour) {
        var _this = _super.call(this, "Part-time") || this;
        _this.workingHour = workingHour;
        return _this;
    }
    PartimeJob.prototype.calculateSalary = function () {
        return this.workingHour * 30000;
    };
    return PartimeJob;
}(Job));
var FulltimeJob = /** @class */ (function (_super) {
    __extends(FulltimeJob, _super);
    function FulltimeJob() {
        return _super.call(this, "Full-time") || this;
    }
    FulltimeJob.prototype.calculateSalary = function () {
        return 10000000;
    };
    return FulltimeJob;
}(Job));
var partTimeJob = new PartimeJob(5);
var fullTimeJob = new FulltimeJob();
console.log(partTimeJob.printType());
console.log(partTimeJob.calculateSalary());
console.log(fullTimeJob.printType());
console.log(fullTimeJob.calculateSalary());
