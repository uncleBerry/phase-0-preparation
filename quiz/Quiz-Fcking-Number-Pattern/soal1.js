// Soal 1

/*
================
MISSING NUMBER
================
description: Sebuah fungsi untuk mencari angka yang hilang berdasarkan pola dari board atau
papan yang tersedia. Fungsi akan mengembalikan nilai sebuah array yang berisi
angka-angka yang hilang

examples:
INPUT = 
[
  [ 7 ,' ', 5 ],
  [' ', 8 , 9 ]
  [ 1 ,' ',' '] 
]

ASUMSI PADA PAPAN SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL YAITU 1 DAN 9 SEHINGGA
OUTPUT:
[ 2, 3, 4, 6]

PADA MASING-MASING TEST CASE SUDAH TERDAPAT RANGE TERBESAR DAN TERKECIL
*/


/* ==== ALGORITHMA ====
1. Gabungkan array 2 dimensi menjadi 1

2. Cari angka terkecil dan angka tertinggi

3. Identifikasi angka dari range terkecil dan terbesar apakah ada di dalam array input atau tidak, jika tidak ada masukan angka tersebut kedalam array baru secara accsending

4. Return array barunya
*/

function missingNum(arr) {
  //code here
  if(arr.length === 0) return [];

  let number = arr.flat().sort((a, b) => a-b).filter(e => typeof e === `number`);
  let result = [];

  let minNumber = Math.min(...number);
  let maxNumber = Math.max(...number);

  let rangeNumber = {};

  for(let i = 0; i < number.length; i++) {
    rangeNumber[number[i]] = true;
  }

  for(let i = minNumber; i <= maxNumber; i++) {
    if(!rangeNumber[i]) {
      result.push(i);
    }
  }

  return result;
}


console.log(missingNum([
  [3, ' ', 5],
  [1, ' ', 7],
  [9, ' ', ' ']
])) // [ 2, 4, 6, 8 ]
console.log(missingNum([
  [2, ' '],
  [' ', 5]
])) // [ 3, 4 ]
console.log(missingNum([
  [11, ' ', 13],
  [17, ' ', 19],
  [' ', 16, ' ']
])) // [ 12, 14, 15, 18 ]
console.log(missingNum([
  [3, ' ', 5, 15],
  [1, ' ', 7, 13],
  [9, ' ', ' ', 12],
  [' ', 16, ' ', ' ']
])) // [ 2, 4, 6, 8, 10, 11, 14 ]
console.log(missingNum([])) // []
