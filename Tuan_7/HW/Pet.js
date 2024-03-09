class Pet {
    constructor() {
        this.name = '';
        this.talk = '';
    }
    introduce() {
        console.log(`Tôi tên là ${this.name}, kêu ${this.talk}`)
    }
}
class Pig extends Pet {
    constructor() {
        super();
        this.type = '';
    }
    animalType() {
        console.log(`Tôi là động vật loại ${this.type}`);
    }
}
let pig = new Pig();
pig.name = 'Nọng';
pig.talk = 'Ụt ụt';
pig.type = 'Heo';
pig.introduce();
pig.animalType();