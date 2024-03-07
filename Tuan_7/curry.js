function add(a,b,c){
    return a+b+c;
}

 console.log(add(1,2,3));

 function addCurries(a){
    return (b) => {
        return (c) =>{
            return a=b+c;
        }
    }
 }

 console.log(addCuries(1)(2)(3));
 const ad1 = addCurries(1);
 const ad2 = ad1(2);
 const ad3 = ad2(4);
  console.log(ad3);
