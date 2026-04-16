// Soal 1

/*

Diberikan sebuah function angka terbesar yang menerima satu parameter berupa array. 
fungsi ini akan mengembalikan atau me return nilai berupa angka terbesar dari array. 
Jika array kosong maka akan mengembalikan nilai -1

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter
- Dilarang Menggunakan Loop
*/

function angkaTerbesar(sentence) {
  //code here

  // Create base case for check if the input is a empty array return -1

  // Create a second base case for check if array length is equel 1 return that elemen

  // take the first elemen in first index of array and put it into variable


  // Do rekursif by input array value start with a second index


  // Do if-else conditioning for check if the first elemen is bigger than second elemen return first elmen, on the contrary return the second elemen


  if(sentence.length === 0) return -1;

  if(sentence.length === 1) return sentence[0];

  let firstElement = sentence[0];
  let theRestElement = angkaTerbesar(sentence.slice(1));

  if(firstElement > theRestElement) return firstElement;
  else return theRestElement;
 
}

// TEST CASES
console.log(angkaTerbesar([2, 3, 7, 6, 5])) // 7
console.log(angkaTerbesar([9, 3, 7, 4, 1])) // 9
console.log(angkaTerbesar([2, 1, 7, 2, 8])) // 8
console.log(angkaTerbesar([])) // -1
