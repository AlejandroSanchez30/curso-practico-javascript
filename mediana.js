const lista1 = [100, 600, 10, 800, 40000000000];


function ordenarLista(lista)
{
    return lista.sort(function(a, b) {
        return a - b;
      });
}


function calcularModa(lista)
{
    lista = ordenarLista(lista);
    console.log(lista);
    var mitadLista1 = 0;
    var resultado = 0;

    if(lista1.length % 2)
    {
        mitadLista1 = lista.length / 2;
        mitadLista1 = parseInt(mitadLista1);
        resultado = lista[mitadLista1];
    }
    else
    {
        var elemento1 = parseInt(lista.length / 2)
        var elemento2 = elemento1 - 1;

        var sumaElementos = lista[elemento1] + lista[elemento2];
        var mediana = parseInt(sumaElementos / 2);

        resultado = mediana;
    }
    return resultado;
}

alert(calcularModa(lista1));