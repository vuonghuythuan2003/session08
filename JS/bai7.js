var width = prompt('Hãy nhập chiều rộng của hình chữ nhật vào đây : ');

width = Number.parseFloat(width);

var height = prompt('Hãy nhập chiều cao của hình chữ nhật vào đây : ');

height = Number.parseFloat(height);

var perimeter = 2*(width + height);

var area = width * height;

console.log('Chu vi hình chữ nhật là ' + perimeter);
console.log('Diện tích hình chữ nhật là ' + area);

