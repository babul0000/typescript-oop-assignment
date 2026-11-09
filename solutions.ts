const multiplyValue = (value: number, multiplier: number = 2): number => {

    return value * multiplier;
}



const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return value ? "Active" : "Inactive";
    }
};



const formatCoordinate = (
    parameterName: readonly [number, number, string]
): string => {
    const loactionName = parameterName[2];
    const latitude = parameterName[0];
    const Longitude = parameterName[1];


    return `Location: ${loactionName} (${latitude}, ${Longitude})`
}



const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = []
    for (const arr of arrays) {
        result.push(...arr);
    }
    return result
}



interface Course {
    title: string;
    students: number;
    isPublished: boolean;
}
const getPopularCourses = (
    course: Course[],
    miniStudent: number,
): Course[] => {

    return course.filter((item) => {
        if (item.isPublished == true && item.students >= miniStudent) {
            return true
        }
        return false
    })
}



const pluckValues = <T, K extends keyof T>(
    items: T[],
    key: K
): T[K][] => {

    const result: T[K][] = [];

    for (const item of items) {
        result.push(item[key]);
    }

    return result;
};



class Employee {
    constructor(
        protected name: string,
        private baseSalary: number
    ) { }
    getDetails(): string {
        return `Employee: ${this.name}, Base Salary: ${this.baseSalary}`;
    }
}
class Manager extends Employee {
    constructor(
        name: string,
        baseSalary: number,
        private department: string
    ) {
        super(name, baseSalary);
    }
    getRoleInfo(): string {
        return `Manager of ${this.department}: ${this.name}`;
    }
}



const validateAgeAsync = (age: number): Promise<string> => {

const promise = new Promise<string>((resolve, reject) => {
    if (age < 18) {
       reject(new Error("Access Denied: Must be 18 or older"))
    }else{
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);

    }
})
 return promise
}
