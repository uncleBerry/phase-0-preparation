
// Soal 1

/*
=====================
DOUBLE REVERSE ARRAY
=====================

[INSTRUCTION]
Terdapat function doubleReverse yang menerima parameter berupa array of string, 
function ini akan memutar elemen array, string yang berada di dalam elemen array juga akan dibalik atau diputar jika panjang string GENAP

[EXAMPLE]
input: ['rabu', 'cinta', 'benci', 'masuk', 'nikmat']
proses: memutar isi array, dan memutar elemen array yang panjang katanya genap
output: [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]

[RULES]
- Function bawaan javascript yang boleh digunakan hanyalah .push dan .length
- DILARANG menggunakan .reverse()
*/

/* ==== ALGORITHMA / PSUDO CODE ====
    // buat array kosong bernama reverseArray

    //Buat for loop yang dimulai dari elemen indeks terakhir

    // Buat for loop ke 2

    // GUnakan pengkondisian if untuk memeriksa apakah panjang elemen string itu ganjil atau genap

    // Jika genap buat for loop yang mengakses huruf setiap elemen, akses huruf terkahir elemen, lalu tambahkan ke varaible string
    // push elemen yang sudah di reverse ke array result

    // return array result
*/

function doubleReverse(arr) {
    //code here 
    if(arr.length === 0) return `invalid input parameter`;

    let result = [];

    for(let i = arr.length - 1; i >= 0; i--) {
        let currentWord = arr[i];

        if(currentWord.length % 2 === 0) {
            let reverseWord = "";

            for(let j = currentWord.length - 1; j >= 0; j--) {
                reverseWord += currentWord[j];
            }

            result.push(reverseWord);
        } else {
            result.push(currentWord);
        }
    }

    return result;
}

console.log(doubleReverse(['rabu', 'cinta', 'benci', 'masuk', 'nikmat']));
// [ 'tamkin', 'masuk', 'benci', 'cinta', 'ubar' ]
console.log(doubleReverse(['aku', 'sayang', 'kamu']));
// [ 'umak', 'gnayas', 'aku' ]
console.log(doubleReverse(['pelakor', 'perusak', 'rumah', 'tangga']));
//[ 'anggnat', 'rumah', 'perusak', 'pelakor' ]
console.log(doubleReverse([]))
// invalid input parameter
