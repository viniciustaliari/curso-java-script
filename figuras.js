//Codigo cuadrado

console.group("cuadrado");
//console.log("Los lados del cuadrado mide: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado){
    return lado * 4;
}
//console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado){
    return lado * lado;
}
//console.log("El area del cuadrado es: " + areaCuadrado + " cm2");
console.groupEnd();

//codigo triangulo

console.group("Triangulo");
//console.log("Los lados del triangulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");

function perimetroTriangulo(lado1, lado2, base){
    return lado1 + lado2 + base;
}
//console.log("El perimetro del triangulo es de " + perimetroTriangulo + "cm");

function areaTriangulo(base, altura){
    return (base * altura)/2;
}
//console.log("El area del triangulo es de " + areaTriangulo + "cm2");
console.groupEnd();

//Codigo circulo

console.group("Circulo");

function diamtroCirculo(radio){
    return radio * 2
}
//console.log("El diametro del circulo es de: " + diamtroCirculo + "cm");

const PI= Math.PI;
//console.log("El valor de PI es: " + PI);

function perimetroCirculo(radio){
    return 2*PI*radio;
}
//console.log("El perimetro del circulo es de: " + perimetroCirculo + "cm");

function areaCirculo(radio){
    return PI*(radio*radio);
}
//console.log("El area del circulo es de: " + areaCirculo + "cm2");

console.groupEnd();

// Aqui interactuamos con HMTL

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}