function fOuter(){
    var x = "hello";
    function Finner(){
        x = " world";
    }
    Finner();
    return x ;
}
console.log(fOuter());


//2
var myFuncton = function(){
    var name =' Le Hang';
    var myOtherFunction = function(){
        console.log('I am '+ name);

    };
    console.log(name);
    myOtherFunction();
};
 myFuncton(); 