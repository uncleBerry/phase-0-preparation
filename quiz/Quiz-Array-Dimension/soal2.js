// Soal 2

/*
==================================
Array Mastery: Find Not Relative
==================================

Diberikan sebuah function findNotRelative yang menerima 2 parameter berupa array of number.
Output adalah array berupa kumpulan angka yang ada di array pertama tetapi tidak ada di array kedua.

Contoh 1:
input: [ 3, 6, 10, 12, 15 ] dan [ 1, 3, 5, 10, 16 ]
output: [ 6, 12, 15]

Contoh 2:
input: [ 10, 20, 36, 59 ] dan [ 5, 10, 15, 59 ]
output: [20, 36]

RULES:
 - DILARANG MENGGUNAKAN .map, .filter atau .reduce!

*/

/* ==== ALGORITMA / PSUDO CODE 
  // Buat array kosong bernama result

  // BUat for loop untuk memriksa seleuruh arr1

  // BUat if conditioning untuk dan juga method include untuk mengecek apakah elemen saat ini ada di arr2

  // JIka tidak masukan elemen atau angka tersebut ke array result dan jika tidak abaikan

  // kembalikan array result saat loop selseai
*/


function findNotRelative(arr1, arr2) {
  //code here


  let result = [];

  for(let i = 0; i < arr1.length; i++) {
    if(arr2.includes(arr1[i]) === false) {
        result.push(arr1[i]);
    }
  }

  return result;
}

console.log(findNotRelative([ 10, 20, 36, 59 ], [ 5, 10, 15, 59 ])); //[20, 36]
console.log(findNotRelative([ 3, 6, 10, 12, 15 ], [ 1, 3, 5, 10, 16 ])); // [ 6, 12, 15]