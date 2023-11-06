import Animal from "./animal.js"; 
import { Student } from "./student.js";
import { addRecord, removeRecord, getRecord, updateRecord } from "./functions.js";



let lion = new Animal("Lion","Mamalia",4);
let goat = new Animal("Goat","Mamalia",4);
let hen  = new Animal("Hen","Birds",2);

console.log(lion.getName());
lion.setName("Lioness");
console.log(lion.getName());


console.log(goat);
console.log(hen);



// Student
let Mathew = new Student('Mathew',"Faculty of Art & Tourism",'Music',100, "5710/2023/2024");
let Chika  = new Student('Chika',"Faculty of SOS",'Anthropoloy',200, "9710/2023/2024");
console.log(Mathew);

Mathew.setFaculty('Information Communication  & Technology')
Mathew.setDept("Computer Science");
console.log(Mathew);
console.log(  Mathew );





let type      = document.getElementById('type');
let form_left = document.querySelector('.form_left');
let record    = document.querySelector('.record');

form_left.innerHTML = `
<form class="__form__">
    <p> Name:     <input type ="text" id="name" class="name"/> </p>
    <p> Kingdom:  <input type ="text" id="kingdom" class="kingdom"/> </p>
    <p> Limbs:    <input type ="number" id="limbs" class="limbs"/> </p>
    <p>   <button type ="submit" id="addButton"> Add  Record </button> </p> 
</form>
`;

type.addEventListener('change',function(evt){
    createRecord();
    switch(evt.target.value){

        case 'Animal':
            form_left.innerHTML = `
                    <form class="__form__">
                        <p> Name:     <input type ="text" id="name" class="name"/> </p>
                        <p> Kingdom:  <input type ="text" id="kingdom" class="kingdom"/> </p>
                        <p> Limbs:    <input type ="number" id="limbs" class="limbs"/> </p>
                        <p>   <button type ="submit" id="addButton"> Add  Record </button> </p> 
                    </form>
            `;
        break;

        case 'Student':

            form_left.innerHTML = `
                            <form class="__form__">
                                <p> Name:     <input type ="text" id="name" class="name"/> </p>
                                <p> Faclty :  <input type ="text" id="faculty" class="faculty"/> </p>
                                <p> Dept:     <input type ="text" id="dept" class="dept"/> </p>
                                <p> RegNo:    <input type ="text" id="regNo" class="regNo"/> </p>
                                <p> Level:    <input type ="text" id="level" class="level"/> </p>
                                <p>   <button type ="submit" id="addButton"> Add  Record </button>   </p> 
                          </form>
                `;

        break;
    }
});


// creating, retriving, updating and deletin records
if(localStorage.getItem('Animal') == null || localStorage.getItem('Animal') == undefined){
    localStorage.setItem('Animal', "[]");
}
if(localStorage.getItem('Student') == null || localStorage.getItem('Student') == undefined){
    localStorage.setItem('Student', "[]");
}
// localStorage.setItem('Animal', "[]");
// localStorage.setItem('Student', "[]");

// addRecord(Mathew, 'Student');
// addRecord(Chika, 'Student');


function createRecord(){
    document.querySelector('.__form__').addEventListener('submit', function(evt){
        evt.preventDefault();

        switch( type.value ){
            case 'Animal':
                let name      = document.getElementById('name').value;
                let kkingdom  = document.getElementById('kingdom').value;
                let limbs     = document.getElementById('limbs').value;
                let animalRecord = new Animal(name, kkingdom,limbs);
                addRecord(animalRecord, 'Animal');
            break;

            case 'Student':
                let st_name =  document.getElementById('name').value; 
                let faculty =  document.getElementById('faculty').value;  
                let dept    =  document.getElementById('dept').value; 
                let regNo   =  document.getElementById('regNo').value; 
                let level   =  document.getElementById('level').value;
                let studentREcord = new Student(st_name, faculty,dept,level,regNo);
                addRecord(studentREcord, 'Student');
            break;
        }

});
}
createRecord();

record.innerHTML = getRecord("Animal");
 





