var student ={
    name: ' Mai Ha Thi',
    getName: function(){
        console.log(this.name);
        return this.name;
    }
};
var _deStudent = student.getName();
