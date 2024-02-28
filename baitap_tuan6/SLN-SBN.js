function timSLSB(mang) {
    
   
    let min = mang[0];
    let max = mang[0];

    // Duyệt qua từng phần tử của mảng để tìm số nhỏ nhất và lớn nhất
    for (let i = 1; i < mang.length; i++) {
        if (mang[i] < min) {
            min = mang[i];
        }
        if (mang[i] > max) {
            max = mang[i];
        }
    }

    return "Số nhỏ nhất là: " + min + ", số lớn nhất là: " + max;
}


let mangso = [1, 2, 3, 4, 5];
console.log(timSLSB(mangso)); 
