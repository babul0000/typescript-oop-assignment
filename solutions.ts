
export {};
const multiplyValue = (value: number, multiplier: number = 2): number => {

    return value * multiplier;
}

// console.log(multiplyValue(5,0));


const processInput = (value: string | number | boolean): string | number => {
    if (typeof value === "string") {
        return value.toLowerCase().trim();
    } else if (typeof value === "number") {
        return value * 10;
    } else {
        return value ? "Active" : "Inactive";
    }
};
// console.log(processInput("BABUL HOSSAN"));
// console.log(processInput(20));
// console.log(processInput(true));
// console.log(processInput(false));





const formatCoordinate = (
    parameterName: readonly [number, number, string]
): string => {
    const loactionName = parameterName[2];
    const latitude = parameterName[0];
    const Longitude = parameterName[1];


    return `Location: ${loactionName} (${latitude}, ${Longitude})`
}
// console.log (formatCoordinate([23.81, 90.41, "Dhaka"]));


const concatenateArrays = <T>(...arrays: T[][]): T[] => {
    const result: T[] = []
    for (const arr of arrays) {
        result.push(...arr);
    }
    return result
}
// console.log(concatenateArrays([1, 2], [3, 4], [5]));

// 5

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
const courses = [
    { title: "TypeScript Mastery", students: 120, isPublished: true },
    { title: "Draft Course", students: 200, isPublished: false },
    { title: "Basic HTML", students: 45, isPublished: true },
    { title: "Next.js Pro", students: 85, isPublished: true }
];

// getPopularCourses(courses, 100);

// console.log(getPopularCourses(courses, 80));


// 6
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
const students = [
    { name: "Babul", age: 25 },
    { name: "Rahim", age: 22 },
    { name: "Karim", age: 24 }
];

// console.log(pluckValues(students, "name"));
// console.log(pluckValues(students, "age"));


// 7

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

const manager = new Manager("Alice", 50000, "Engineering");
manager.getDetails();
manager.getRoleInfo();

// console.log(manager);


const validateAgeAsync = (age: number): Promise<string> => {

const promise = new Promise<string>((resolve, reject) => {
    if (age < 18) {
        reject("Access Denied: Must be 18 or older")
    }else{
        setTimeout(() => {
            resolve("Access Granted")
        }, 1000);

    }

})
 return promise
}

const output =await validateAgeAsync(20);
console.log(output);







// Sample Input 1:
// await validateAgeAsync(20);

// Sample Output 1 (resolves after 1 second):
// "Access Granted"

// Sample Input 2:
// await validateAgeAsync(15);

// Sample Output 2 (rejects with Error):
// Error: Access Denied: Must be 18 or older
