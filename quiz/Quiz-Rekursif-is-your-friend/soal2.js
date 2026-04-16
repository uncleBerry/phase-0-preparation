// Soal 2

/**
 * ////////////////
 * changeXRecursive
 * ////////////////
 * Function ini harus dikerjakan dengan menggunakan rekursif.
 * Function ini menerima dua parameter, yaitu:
 *  1. data yang merupakan string dari number
 *  2. jenis yang merupakan string berisi antara ganjil dan genap
 *
 * [EXAMPLE]
 * Input: data = 012345678922468 dan jenis = ganjil
 * Process: Karena jenisnya ganjil maka setiap bilangan genap diubah menjadi x
 * Output: x1x3x5x7x9xxxxx
 *
 * [RULES]
 * 1. Dilarang mengubah tipe parameter function
 * 2. Dilarang membuat function diluar function yang disediakan
 * 5. Wajib menggunakan rekursif
 */

function changeXRecursive(data, jenis) {
  //code here




  // Check is data length is a zero then return a zero string

  // Take a firsit element into a varaible 

  // Check if jenis is a genap or ganjil then cek the character inside input is a genap or ganjil using modulus operator

  // if the character is ganjil put x into process character varaible and to the rest

  // do rekursif by cutting a first index of strinng and using a second paramter (jenis) and put the result inside hasilRekurisf varaible

  // return and concate firstEelement + hasilRekursif


    if(data.length === 0) return "";

    let firsitElement = data[0];
    let process = "";

    if(jenis === `ganjil`) {
        if(Number(firsitElement) % 2 !== 0) 
            process += firsitElement;
         else 
            process += `x`;
        
    } else  {
         if(Number(firsitElement) % 2 === 0) 
            process += firsitElement;
         else 
            process += `x`;
        
    }

    let hasilRekurisf = changeXRecursive(data.slice(1), jenis);

    return process + hasilRekurisf;
}

console.log(changeXRecursive("012345678922468", "ganjil")); //x1x3x5x7x9xxxxx
console.log(changeXRecursive("0123456789", "genap")); //0x2x4x6x8x
