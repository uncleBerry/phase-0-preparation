//Soal 4

/*
================
Recursive - Hanya Bilangan Terbagi Nol
================

dividableRecursive adalah sebuah function yang
 menerima dua parameter berupa array dan num.
function akan mereturn sebuah sebuah number yang 
hanya sisa baginya nol dari bilangan num

[RULE]
- Wajib menggunakan recursive
- Dilarang menggunakan regex .match dan lainnya!
- Tidak boleh membuat variable diluar function
- Tidak boleh menambahkan parameter baru
- Tidak boleh menggunakan looping while/for    
*/

function dividableRecursive(array, num) {
  //code here

  /* ==== ALGORITHMS ====
  1. Crate a base case that if arras length is equel zero, then return a zero array
  2. Make a variable array called result
  3. Check every element inside array that if divide by num should be equel zero
  4. do recursion operasion then chek the reuslt if divide by num should be equel zero, then put the number inside result variable
  5. return result by concat with a recursion result

  */

  if(array.length === 0) return [];

  let result = [];
  
  let firstElement = array[0];
  let leftOver = dividableRecursive(array.slice(1), num);

  if(firstElement % num === 0 ) result.push(firstElement);

  return result.concat(leftOver).join(' ');

}

// DRIVER CODE
console.log(dividableRecursive([66, 33, 55, 44, 11], 3)) // 66 33
console.log(dividableRecursive([123, 222, 100, 50, 32], 2)) // 222 100 50 32
console.log(dividableRecursive([125, 500, 201, 202, 66], 5)) // 125 500
console.log(dividableRecursive([66, 33, 55, 44, 132], 6)) // 66 132
