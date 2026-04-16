// Soal 4

/*
==================================
Array Mastery: Average Length Word
==================================
Nama:________
[INSTRUKSI]
Disediakan sebuah kalimat. Function averageLengthWord akan menerima satu parameter berupa string
yang berisikan kalimat tersebut, dan akan mendapatkan rata-rata jumlah huruf dari setiap kata,
kemudian mengembalikan nilai berupa array of string yang berisikan kata mana saja yang jumlahnya
sama dengan rata-rata jumlah kata.

NOTE:
 - Spasi tidak dihitung
 - Jika hasil rata-rata adalah desimal maka dibulatkan

[CONTOH]
input (kalimat): Do you want to become a great coder.
rata-rata panjang kata dalam kalimat: 3
output: ['you']

input (kalimat): You dont know what you have until you lose it!.
rata-rata panjang kata dalam kalimat: 4
output: ['dont', 'know', 'what', 'have', 'lose']
*/

/* ==== ALGORITHM ====
1. Ubah input string menjadi array dan abaikan simbol nya jika ada
2. Lakukan perulangan menjumlahkan seluruh panjang kata dalam array dan simpan hasilnya kedalam varaible
3. Bagi hasil penjumlahan nya denagn panjang array lalu simpan hasilnya kedalam varaible
4. Filter dan kembalikan elemen array yang panjang kata nya sama dengan panjang rata-rata kata didalam array

*/

// function averageLengthWord(words) {
//   //code here
//     let strArr = words.match(/\w+/ig);

//     let average  = strArr.reduce((total, element) => total + element.length, 0) / strArr.length;

//     let result = strArr.filter(e => e.length === Math.round(average - 0.1));

//     return  result 
    
// }

function averageLengthWord(words) {
  // 1. Pecah manual atau pakai RegEx
  let strArr = words.match(/\w+/ig);
  if (!strArr) return [];

  // 2. Hitung total huruf (Manual Loop)
  let totalLetters = 0;
  for (let i = 0; i < strArr.length; i++) {
    totalLetters += strArr[i].length;
  }

  // 3. Hitung rata-rata & pembulatan
  let average = Math.round(totalLetters / strArr.length);

  // 4. Filter manual (Manual Loop)
  let result = [];
  for (let j = 0; j < strArr.length; j++) {
    if (strArr[j].length === average) {
      result.push(strArr[j]);
    }
  }

  return result;
}

console.log(averageLengthWord('Do you want to become a great coder ?')); // ['you']
console.log(averageLengthWord('You dont know what you have until you lose it!')); // [ 'dont','know','what','have','lose']
console.log(averageLengthWord('I am diligent')); // []
