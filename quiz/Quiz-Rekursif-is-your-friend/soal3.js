// Soal 3

/**
  Vowels Counter Recursive
  Diberikan sebuah function consonantCounterRecursive(sentences) yang 
  menerima satu parameter berupa
  string. Function akan me-return jumlah huruf konsonan yang terdapat 
  di dalam parameter inputan.
  Jika ada karakter selain abjad/alphabet maka tidak akan dihitung.
- Wajib menggunakan metode rekursif
  - DILARANG menambahkan parameter baru
  - DILARANG membuat variable di luar function vowelsCounterRecursive
  - DILARANG mengubah tipe data parameter
  - proses looping (while, for, do-while, dan lain-lain) HANYA BOLEH ADA SATU
  - DILARANG menambahkan function di luar maupun di dalam function vowelsCounterRecursive
  - DILARANG menggunakan built in function .indexOf atau .include
  - DILARANG menggunakan REGEX
*/

function consonantCounterRecursive(sentences) {
  //code here

  

  let sentencess = sentences.toUpperCase();

  if(sentencess.length === 0) return 0;

  const consonant = {B:'B', C:'C', D:'D', F:'F', G:'G', H:'H', J:'J', K:'K', L:'L', M:'M', N:'N', P:'P', Q:'Q', R:'R', S:'S', T:'T', V:'V', W:'W', X:'X', Y:'Y', Z:'Z'};

  let counter = 0;
  let firstEelement = sentencess[0];

  if(consonant[firstEelement]) counter++; 


  return counter + consonantCounterRecursive(sentencess.slice(1));

}

console.log(consonantCounterRecursive('alDi Suka MakAn baksO')) //10
console.log(consonantCounterRecursive('AziZy')) // 3
console.log(consonantCounterRecursive('awt6an')) // 3
