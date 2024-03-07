class square{
    constructor(width){
    this.width = width;
}
getArea(){
    console.log(`Square of this ${this.width * this.width}`);
    return this.width * this.width;
}
}
class cube extends square{
    constructor(width){
        super(width);
    }
    squareArrea = this.getArea();
    getVolume(){
        console.log(`Volume of this ${this.squareArrea * this.width}`);
        return this.squareArrea *this.width;
    }

}
var myCube = new cube(5);
myCube.getVolume();