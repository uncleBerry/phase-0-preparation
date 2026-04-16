function squareNumber(num) {
  //code here

  // BUat variable counter dan isi nilai defaultnay dengan nilai input dikali dengan dirinya sendiri

  // Buat nested loop

    // di dalam nested loop nya cek apakah indeks i yang akan menjadi baris nya genap atau ganjil 

    // jiak genap simpan angka counternya secara accsending dan sebaliknya

    // decerment nilai counter


    //return arraynya

    if(num < 3) return `Minimal input adalah 3`;

    let result = [];
    let counter = num*num;

    for(let i = 0; i < num; i++) {
        result.push([]);
    }

    for(let i = 0; i < num; i++) {
        for(let j = 0; j < num; j++) {
            if(i % 2 === 0) result[i].unshift(counter);
            else result[i].push(counter);
            counter--;
        }
    }
    
    return result;
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]

console.log(squareNumber(2)); // Minimal input adalah 3
