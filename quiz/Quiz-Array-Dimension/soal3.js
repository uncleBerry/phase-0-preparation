// Soal 3

/*
Minimum Distance Between Greatest Element

Diberikan sebuah function minDistanceBetweenGreatest yang menerima sebuah parameter array of number. Dimana array tersebut akan memiliki nilai terbesar yang kemunculannya bisa lebih dari satu kali. Tentukan minimum jarak antara nilai terbesar satu ke nilai terbesar lainnya.

Contoh 1:
Input : [ 3, 5, 2, 3, 5, 3, 5 ]
Output : 2

Karena nilai terbesar dari array tersebut adalah 5 dan indeksnya adalah 1, 4 dan 6
- indeks 1 ke indeks 4, jaraknya adalah 3
- indeks 4 ke indeks 6, jaraknya adalah 2 

Jadi minimum jarak adalah 2

Contoh 2:
Input : [ 1, 1, 1, 1, 1, 1 ]
Output : 1


Karena nilai terbesar dari array tersebut adalah 1 dan indeksnya adalah 0, 1, 2, 3, 4 dan 5
- indeks 0 ke indeks 1, jaraknya adalah 1
- indeks 1 ke indeks 2, jaraknya adalah 1
- indeks 2 ke indeks 3, jaraknya adalah 1
- indeks 3 ke indeks 4, jaraknya adalah 1
- indeks 4 ke indeks 5, jaraknya adalah 1

Jadi minimum jarak adalah 1

RULE:
 - Dilarang menggunakan .map, .filter dan .reduce

*/

/* ALGORITMA 

1. Buat variable result dengan nilai besar sebagai default value nya
2. Temukan angka terbesar dan simpan angkanya kedalam varaible
3. Buat varaible lastINdex untuk menyimpan posis indeks angka terbesar terkahir yang terlihat, simpan -1 sebagai default valunya
4. Buat perulangan, algoritma didalam perulangan :
 - Cek apakah elemen array dalam indeks saat ini sama dengan bigest number, jika ya
    - Cek apakah lastIndex tidak sama dengan -1, jika tidak simpan indeks saat ini (yang mana indeks saat ini adalah tempat biggest number) kedalam varaible last index, jika ya :
        - Hitung jarak indeks saat ini dengan last indeks, lalu masukan kedalam varaible minDist
        - Cek apakah minDist lebih kecil dari pada result, jika ya simpan mindist kedalam result
5. Setelah loop selsai cek apakah result nilainya masih infinity, jika ya return nol, jika tidak return resultnya.
*/

function minDistanceBetweenGreatest(arr) {
  // your code here
  let result = Infinity;
  let lastIndex = -1;
  let biggestNumber = Math.max(...arr);

  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === biggestNumber) {
        if(lastIndex != -1) {
            let minDist = i - lastIndex;
            if(minDist < result) result = minDist;
        }
        lastIndex = i;
    }
  }

  return result === Infinity? 0: result;
}

console.log(minDistanceBetweenGreatest([3, 5, 2, 3, 5, 3, 5])); //2
console.log(minDistanceBetweenGreatest([1, 1, 1, 1, 1, 1])); //1
console.log(minDistanceBetweenGreatest([7, 8, 5, 2, 1, 1])); //0

