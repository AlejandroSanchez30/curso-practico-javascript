//Codigo del cuadrado: 
console.group("Cuadrados");

function perimetroCuadrado(ladoCuadrado)
{
    return ladoCuadrado * 4;
}

function areaCuadrado(ladoCuadrado)
{
    return ladoCuadrado * ladoCuadrado;
}

console.log("El perimetro del cuadrado es de: " + perimetroCuadrado(4) + " unidades.");


console.log("El area del cuadrado es de: " + areaCuadrado(4) + " unidades cuadradas.");
console.groupEnd();

//Codigo del triangulo: 

console.group("Triangulos");

function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo)
{
    return parseInt(ladoTriangulo1) + parseInt(ladoTriangulo2) + parseInt(baseTriangulo);
}

console.log("El perimetro del cuadrado es de: " + perimetroTriangulo(6,6,4) + " unidades.");

function areaTriangulo(baseTriangulo, alturaTriangulo)
{
    return (baseTriangulo * alturaTriangulo) / 2;
}

console.log("El area del triangulo es de: " + areaTriangulo(4, 5.5) + " unidades cuadradas.");

console.groupEnd();

//Codigo del circulo:

console.group("Círculos")
;

function diametroCirculo(radioCirculo)
{
    return radioCirculo * 2;
}

console.log("El diametro del circulo mide: " + diametroCirculo(4) + " unidades.");

const PI = Math.PI;

function circunferenciaCirculo(diametroCirculo)
{
    return PI * diametroCirculo;
}

console.log("La circunferencia del circulo mide: " + circunferenciaCirculo(diametroCirculo(4)) + " unidades.");

function areaCirculo(radioCirculo)
{
    return PI * (radioCirculo * radioCirculo);
}

console.log("El área del circulo mide: " + areaCirculo(4) + " unidades cuadradas.");

console.groupEnd();

//Aquí se interactua con el HTML


//CUADRADO--------------------------------------------------------------------------------------------

function calcularPerimetroCuadrado()
{
    const ladoCuadrado = document.getElementById("ladoCuadrado").value;
    alert("El perimetro del cuadrado es de: " + perimetroCuadrado(ladoCuadrado));
}

function calcularAreaCuadrado()
{
    const ladoCuadrado = document.getElementById("ladoCuadrado").value;
    alert("El área del cuadrado es de: " + areaCuadrado(ladoCuadrado));
}


//Triangulo--------------------------------------------------------------------------------------------

function calcularPerimetroTriangulo()
{
    var ladoTriangulo1 = document.getElementById("ladoTriangulo1").value;
    var ladoTriangulo2 = document.getElementById("ladoTriangulo2").value;
    var baseTriangulo = document.getElementById("baseTriangulo").value;

    alert("El perimetro del cuadrado es de: " + perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo));
}

function calcularAreaTriangulo()
{
    var baseTriangulo = parseFloat(document.getElementById("baseTriangulo").value);
    var alturaTriangulo = parseFloat(document.getElementById("alturaTriangulo").value);

    alert("El área del triangulo es de: " + areaTriangulo(baseTriangulo, alturaTriangulo));
}


//Circulo--------------------------------------------------------------------------------------------

function calcularDiametroCirculo()
{
    var radioCirculo = parseFloat(document.getElementById("radioCirculo").value);
    alert("El diametro del circulo es de: " + diametroCirculo(radioCirculo));
}

function calcularCircunferenciaCirculo()
{
    var radioCirculo = parseFloat(document.getElementById("radioCirculo").value);
    alert("La circunferencia del circulo es de: " + circunferenciaCirculo(radioCirculo));
}

function calcularAreaCirculo()
{
    var radioCirculo = parseFloat(document.getElementById("radioCirculo").value);
    alert("El área del circulo es de: " + areaCirculo(radioCirculo)); 
}

//Triangulo Isosceles--------------------------------------------------------------------------------------------


function alturaTrianguloIsc(lado, base)
{   
    return Math.sqrt(Math.pow(lado, 2) - (Math.pow(base, 2) / 4));

}

function calcularAlturaTrianguloIsc()
{
    var ladoTrianguloIsc = parseFloat(document.getElementById("ladoTrianguloIsc").value);
    var baseTrianguloIsc = parseFloat(document.getElementById("baseTrianguloIsc").value);

    alert("La altura del triángulo es de: " + alturaTrianguloIsc(ladoTrianguloIsc, baseTrianguloIsc)); 
}
