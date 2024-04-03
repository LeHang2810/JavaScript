const { writeFileSync } = require('fs');

// Bắt đầu vòng lặp từ 0 đến 9999999
for (let i = 0; i < 1000; i++) {
    // Ghi dữ liệu vào tệp tin với tên động
    const fileName = `./content/lehang.txt`; // Tạo tên tệp tin mới với số thứ tự từ vòng lặp
    // Thêm văn bản vào tệp tin
    writeFileSync(fileName, `lehang xinh dep`,{flag: 'a'});
}
