// function Car(){}

// Car.prototype = {
//     Constructor: Car,
//     speed: 0,
//     printSpeed: function(){
//         document.write(this.speed + '<br/>');
//     }};

//     var car = new Car();
//     car.instaceMethod = function(){
//         document.write('An instance method <br/>')
//     }
//     car.speed = 50;
//     car.printSpeed();
//     car.instaceMethod();

//     function Cabriolet(){

//     }

//     Cabriolet.prototype = new Car();
//     Cabriolet.prototype.topState = ' closed';
//     Cabriolet.prototype.openTop = function(){
//         this.topState ='opened';
//         document.write('Top:'+ this.topState+'<br/>');
//     }
//     Cabriolet.prototype.closeTop =function(){
//         this.topState='closed';
//         document.write('Top:' + this.topState + '<br/>');
//     }
// var cabriolet = new Cabriolet();
// cabriolet.speed = 120;
// cabriolet.printSpeed();
// cabriolet.openTop();
// cabriolet.closeTop();
// function TeslaCabriolet(){}

// TeslaCabriolet.prototype = new Cabriolet();
// TeslaCabriolet.prototype.name = 'Tesla http://www.teslamotors.com/roadster';
// TeslaCabriolet.prototype.sayName = function(){
//     document.write(this.name + '<br/>');

// };

// var tesla = new TeslaCabriolet();
// tesla.openTop();
// tesla.sayName();


//chuyen sang dang class
class Car{
    constructor(){
        this.speed = 0;

    }

    printSpeed(){

        console.log(this.speed);

    }
}
var car = new Car();
car.instaceMethod = function(){
    console.log("An instance method");
};

car.speed = 50;
car.printSpeed();
car.instaceMethod();

class Cabriolet extends Car{
    constructor(){
        super();
        this.topState = 'closed';
    }
    openTop(){
        this.topState = 'opened';
        console.log(`Top: ${this.topState}`);
    }

    closeTop(){
        this.topState = ' closed';
        console.log(`Top: ${this.topState}`);
    }
}

var cabriolet = new Cabriolet();
cabriolet.speed = 120;
cabriolet.printSpeed();
cabriolet.openTop();
cabriolet.closeTop();


class TeslaCabriolet extends Cabriolet{
    constructor(){
        super();
        this.name = 'Tesla http://www.teslamotos.com/roadster'
    }

    sayName(){
        console.log(this.name);
    }
}
var tesla = new TeslaCabriolet();
tesla.openTop();
tesla.sayName();
