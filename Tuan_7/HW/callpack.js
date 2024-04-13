function callBack(arr, callback) {
    const sochan = [];
    const sole = [];

    arr.forEach(num => {
        if (callback(num)) {
            
            sochan.push(num);

        } else {
            sole.push(num);
        }
    });

    return { sochan, sole };
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const result = callBack(numbers, num => num % 2 === 0);
console.log("Số Chẵn:", result.sochan);
console.log("Số Lẻ:", result.sole);