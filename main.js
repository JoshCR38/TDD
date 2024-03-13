/*
TDD TEST DRIVEN DEVELOPMENT

CALCULADORA DE AREAS PARA POLIGONOS:
    * cuadrado
    * triangulo
    * rectangulo

CASOS USO
    1. Calcular el area de un cuadrado 8 X 8 resultado esperado 64
    2. Calcular el area de un triangulo altura 24 y base 21 el resultado esperado es 252
    3. Calcular el area de un rectangulo largo 8 por ancho 4 el resultado esperado es 16
*/
class CalculadoraDeArea {
calculadoraDeCuadrado(lado){
    return lado * lado
    }

calculadoraDeTriangulo(base, altura){
    return base * altura / 2;
    }

calculadoraDeRectangulo(largo, ancho){
    return largo * ancho
    }
}

module.exports = CalculadoraDeArea;