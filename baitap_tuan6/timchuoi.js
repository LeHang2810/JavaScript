function timchuoi(chuoi) {
    const a = chuoi.split(' ');
    let maxLength = 0;
    let chuoiDai = '';

    for (let i = 0; i < a.length; i++) {
        let kytu = a[i];
        let doDai = kytu.length; 
        if (doDai > maxLength) {
            maxLength = doDai;
            chuoiDai = kytu;
        }
    }
    return chuoiDai;
}

var a = 'e nọng xinh đẹp';
console.log("Từ dài nhất trong chuỗi là:", timchuoi(a));
