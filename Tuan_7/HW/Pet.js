class Pet {
    constructor() {
    this.name = '';
    this.talk = '';
        //hai giá trị khởi tạo rỗng
    }

    introduce() { //phương thức định nghĩa in ra tên vật nuoi
        console.log(`Tôi tên là ${this.name}, kêu ${this.talk}`)

    }
}
class Pig extends Pet { //tạo pig là lớp con của Pet
    constructor() {
    super();//gọi hàm tạo của lớp cha
    this.type = '';// chỉ định loại vật gì

    }
    animalType() { // định nghĩa loại vật
        console.log(`Tôi là động vật loại ${this.type}`);

    }
}

let pig = new Pig();
pig.name = 'Nọng';
pig.talk = 'Ụt ụt';
pig.type = 'Heo';
pig.introduce();
pig.animalType();
