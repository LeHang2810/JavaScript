// var x = 3;
// var count = 0;

// for(var i = 0; i < x - 2; i++) {
//     if(x % i == 0) {
//         console.log("Uoc so khac: " ,i);
//         count++;
//         break;
//     }
// }
// if(count == 0) {
//     console.log("Day la so nguyen to")
// }else {
//     console.log("Day khong phai la so nguyen to")
// }

//
function check(n){
    if( n<=1){
        return false;
}
for (let i =2; i*i<=n; i++){
    if( n % i === 0){
        return false;
    }
    return true;

}

let x = 3;
if(check(x)){
    console.log(x + 'la so nguyn to');
} else{
    console.log( x + 'khong phai la so nguyen to')
}
}