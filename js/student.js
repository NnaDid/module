export class Student{

    constructor(name,faculty,department,level,regNumber){
        this.name    = name;
        this.faculty =  faculty;
        this.department = department;
        this.level = level;
        this.regNumber = regNumber;
    }

    getStudentInfo(){
        return `Name: ${this.name}
                Faculty: ${this.faculty}
                Dept: ${this.department}
                Level: ${this.level}
                regNumber: ${this.regNumber}
                `;
    }

    getName(){
        return this.name;
    }

    getRegNo(){
        return this.regNumber;
    }


    setName(name){
        this.name = name;
    }

    setRegNumber(regNo){
        this.regNumber = regNo;
    }

    setDept(dept){
        this.department = dept;
    }

    setFaculty(faculty){
        this.faculty = faculty;
    }





}