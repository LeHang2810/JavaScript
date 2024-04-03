

// Sử dụng phương thức on với cú pháp tùy chỉnh
// customElemits.on('lehang', '0102', 20);
// customElemits.emit(name, id) {
//     console.log(`xuat ra ten ${name} và ${id}`);
// };
var customElemits = {
    // Phương thức 'on' để đăng ký một sự kiện
    on: function(eventName, id, age) {
        // Logic xử lý sự kiện
        console.log(`Đã đăng ký sự kiện '${eventName}' với id '${id}' và age '${age}'`);
    },

    // Phương thức 'emit' để kích hoạt một sự kiện
    emit: function(name, id) {
        // Logic xử lý khi kích hoạt sự kiện
        console.log(`Xuất ra tên ${name} và id ${id}`);
    }
};

// Gọi phương thức 'on' để đăng ký sự kiện 'lehang'
customElemits.on('lehang', '0102', 20);

// Gọi phương thức 'emit' để kích hoạt sự kiện với tên và id
customElemits.emit('John', '123');


