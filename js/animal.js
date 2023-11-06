
export default class Animal{
    
    constructor(name, kingdom, limbs){
            this.name    = name;
            this.kingdom = kingdom;
            this.limbs   = limbs;
    }

    getName(){
        return this.name
    }
    
    getKingdom(){
        return this.kingdom;
    }

    getLimbs(){
        return this.limbs;
    }

    setName(name){
        this.name = name;
    }


}

// export default Animal;