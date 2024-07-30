let a = 5;
let b = “5”;
console.log(a==b); // so sánh mỗi value nên giá trị là true (5=5)
console.log(a===b); // so sánh cả value lẫn datatype nên giá trị là false vì là 1 kiểu là kiểu number 1 bên là kiểu string
console.log(a!=b); //  so sánh mỗi value nên giá trị là false (5 # 5)
console.log(a!==b); // so sánh cả value lẫn datatype nên giá trị là true(5#5 && number # string)