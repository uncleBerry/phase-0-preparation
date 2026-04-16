/**
  Hapus Simbol Rekursif
  Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa
  string. Function akan me-return string yang telah bersih dari berbagai simbol,
  hanya menyisakan a-z dan angka 0-9.
  RULES:
  - Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function hapusSimbolRec
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function hapusSimbolRec
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
**/

function hapusSimbolRec(str) {
  //code here

  /* ==== ALGORITHMS ====
  1. Create a base case that if str input is equal zero string, then return zero string
  2. Check the first element of string that is simbol or not, if the elment is number or letter put into result variable and if not ignore it.
  3. Do recurtion operation 
  4. return result variable + recurtion result
  */ 

    if(str.length === 0) return '';

    let firstElement = str[0];
    let leftOver = hapusSimbolRec(str.slice(1));

    if((firstElement <= 'z' && firstElement >= 'a') || (firstElement >= 'A' && firstElement <= 'Z') || (firstElement >= '0' && firstElement <= '9')) {
        return firstElement + leftOver;
    }
    return leftOver;
}

console.log(hapusSimbolRec('test4@aa')); //test4aa
console.log(hapusSimbolRec('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbolRec('ma@#k!an~')); // makan
console.log(hapusSimbolRec('coding')); // coding
console.log(hapusSimbolRec('1+3-5*2=100')); // 1352100
