var Celsius = prompt('Hãy nhập nhiệt độ mà bạn muốn vào đây :');

Celsius = Number.parseFloat(Celsius);

var Fahrenheit = (Celsius*9/5) + 32;

console.log('Nhiệt độ đổi từ độ C là ' + Fahrenheit);

document.write('Nhiệt độ trung bình đổi từ độ C là : ' + Fahrenheit);

