



function xuat(a) {
    var  x = 5;
    let b = [];
    for (let i = 1; i < a.length; i++) {
        if( a[i] > x ){
           b.push(a[i]) ;
        }
    }
    for(let i =0; i< b.length;i++){
        console.log( b[i]);
    }
   
}
let mangso = [3,4,5,6,7];
xuat(mangso);
