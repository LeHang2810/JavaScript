var sachs = [
    {
        tacgia: 'Harper Lee',
        tieuDe: 'To Kill a Mockingbird',
        namXuatBan: 2020,
        trangthai: true
    }, 
    {
        tacgia: 'Ray Brabury',
        tieuDe: 'Fahrenheit 451',
        namXuatBan: 2022,
        trangthai: false 
    }
];

console.log(sachs[0].tacgia+ ' ' +sachs[1].tacgia);

for (var i = 0; i < sachs.length; i++) {
    console.log(sachs[i].tacgia);
    console.log(sachs[i].tieuDe);
    console.log(sachs[i].namXuatBan);
    console.log(sachs[i].trangthai);
}