function plusAll(){
    var res=0;
    for(var i in arguments){
        res += arguments[i];

    }
    return res;
}
console.log(plusAll(1,2) + "<br/>");
console.log(plusAll(2,3,5) + "<br/>");

function func1(a,b,c){
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}
func1(1,2,3);