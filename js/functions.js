
export function addRecord(record,type){ 
      switch(type){

        case "Animal":
            let animaldb = JSON.parse( localStorage.getItem(type) );
            animaldb.push(record);
            //  // update the database
            localStorage.setItem(type, JSON.stringify(animaldb));
            console.log(animaldb);

             
        break;

        case 'Student':
            let studentdb = JSON.parse( localStorage.getItem(type) );
            studentdb.push(record);
            //  // update the database
            localStorage.setItem(type, JSON.stringify(studentdb));
            console.log(studentdb);

        break;



      }
}

export function removeRecord(record, db, type){

}

export function getRecord(type){
    let dbRecord = JSON.parse( localStorage.getItem(type) );
    let recordStr = "";
    dbRecord.forEach(record => {
        recordStr+=`<div class="record_item">
                    <h4>Type :  ${type}</h4>
                    <p>Name :     ${record.name}</p>
                    <p>KIngdom :  ${record.kingdom}</p>
                    <p>Limbs :     ${record.limbs}</p> 
                    </div>`;
    });
 return recordStr;
}


export function updateRecord(record,db, type){

}