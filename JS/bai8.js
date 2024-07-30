var radius = prompt('Hãy nhập bán kính hình tròn vào đây : ');

radius = Number.parseFloat(radius);

const PI = 3.14159;

var area = radius * radius * PI;

var perimeter = radius * 2 * PI;

console.log('Chu vi hình tròn là ' + perimeter);
console.log('Diện tích hình tròn là ' + area);