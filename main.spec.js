/* CASOS USO
    1. Calcular el area de un cuadrado 8 X 8 resultado esperado 64
    2. Calcular el area de un triangulo altura 24 y base 21 el resultado esperado es 252
*/

const CalculadoraDeArea = require('./main')

describe('Calculadora de area', () =>{
    const calculadoraDeArea = new CalculadoraDeArea();
    it('Calculadora de cuadrado', () =>{ 
        const resultado = calculadoraDeArea.calculadoraDeCuadrado(8);
        expect(resultado).toBe(64)
    });

    it('Calculadora de cuadrado', () =>{ 
        const resultado = calculadoraDeArea.calculadoraDeCuadrado(9);
        expect(resultado).toBe(81)
    });

    it('Calculadora de triangulo', () =>{ 
        const resultado = calculadoraDeArea.calculadoraDeTriangulo(12, 20);
        expect(resultado).toBe(120)
    });

    it('Calculadora de rectangulo', () =>{
        const resultado = calculadoraDeArea.calculadoraDeRectangulo(8, 4);
        expect(resultado).toBe(32)
    });
});

