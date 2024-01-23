var x = 3;
var count = 0;

for(var i = 0; i < x - 2; i++) {
    if(x % i == 0) {
        console.log("Uoc so khac: " ,i);
        count++;
        break;
    }
}
if(count == 0) {
    console.log("Day la so nguyen to")
}else {
    console.log("Day khong phai la so nguyen to")
}
