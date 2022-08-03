let input = [1,2,3,4,5];
var total = 0;
var total1 = 0;
var total2 = 0;
var total3 = 0;
var total4 = 0;

//buat loping for
for (let i = 0; i < input.length; i++) {
    // let angka = (input[i]);  
    if (input[i] == input[0]) {

    }else {
        total += input[i];
    }

    if (input[i] == input[1]) {

    }else {
        total1 += input[i]; 
    }

    if (input[i] == input[2]) {

    }else {
        total2 += input[i]; 
    }
    if (input[i] == input[3]) {

    }else {
        total3 += input[i]; 
    }

    if (input[i] == input[4]) {

    }else {
        total4 += input[i]; 
    }
    
}
// console.log(total);
// console.log(total1);
// console.log(total2);
// console.log(total3);
// console.log(total4);

let hasil =  [total,total1,total2,total3,total4]
let min, max;
for (let j = 0; j < hasil.length; j++) {
    let hasil1 = hasil[j];
    if ( j == 0) {
        min = hasil1;
        max = hasil1;
    } else {
        if (hasil1 < min) min = hasil1;
        if (hasil1 > max) max = hasil1;
    }
    
}
console.log(min);
console.log(max);


    
