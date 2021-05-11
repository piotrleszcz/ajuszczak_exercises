var input = prompt("Give me radius");
var radius = parseInt(input, 10);
var area = Math.PI * (radius ** 2);
var circumference = 2 * Math.PI * radius;
var output = {area: area, circumference: circumference};
var json = JSON.stringify(output, null, 8);
alert(json);



// var input = prompt("What is the radius?");

// var radius = parseInt(input, 10);

// var area = Math.PI * (radius ** 2);

// var circumference = 2 * Math.PI * radius;

// var output = {area: area, circumference: circumference};

// var json = JSON.stringify(output, null, 8);

// alert(json);