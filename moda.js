const lista1 =
[
    1,2,3,3,3,3,2,5,6,7,3,3,4,8,3,8
];



function calcularModa(lista)
{
    const listaCount = {};

    lista.map(
        function (elemento)
        {
            if(listaCount[elemento])
            {
                listaCount[elemento] +=1;
            }
            else
            {
                listaCount[elemento] = 1;
            }
        }
    );


    const listaArray = Object.entries(listaCount).sort(
        function  (valorAcumulado, nuevoValor)
        {
            return valorAcumulado[1] - nuevoValor[1];
        }
    );

    const moda = listaArray[listaArray.length - 1];

    return moda;

}

alert(calcularModa(lista1));