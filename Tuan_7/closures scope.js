var sayBye = function (name){
    var text ='Bye, ' + name;
    return () => {
        console.log(text);
    }
}
sayBye('Me');
var calledMe = sayBye('Me');
calledMe();
