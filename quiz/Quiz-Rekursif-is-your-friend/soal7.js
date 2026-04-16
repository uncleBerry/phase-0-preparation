

/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
    //code here
        
    let str = String(equation);

    if(str.length === 1) return str;

    let firstDigit = str[0];
    let remaining = str.slice(1);

    if(firstDigit === '0') return parseNumber(Number(remaining));

    let zeros = '';
    for(let i = 0; i < remaining.length; i++) {
      zeros += '0';
    }

    let result = firstDigit + zeros;
    let recursiveResult = parseNumber(Number(remaining));

    return Number(remaining) === 0 ? result: result + "+" + recursiveResult;
        
};

console.log(parseNumber(3333)) // 3000+300+30+3  // 3000 + 300 + 30 + 3
console.log(parseNumber(90)) // 90
console.log(parseNumber(2333)) // 2000+300+30+3






