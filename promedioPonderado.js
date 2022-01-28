var calificaciones = [
    {
        calificacion: 6,
        ponderacion: 1
    },
    {
        calificacion: 7,
        ponderacion: 1
    },
    {
        calificacion: 5,
        ponderacion: 1
    },
    {
        calificacion: 7,
        ponderacion: 1
    },
    {
        calificacion: 8,
        ponderacion: 1
    },
    {
        calificacion: 6,
        ponderacion: 5
    }
];





function calcularPromedioPonderado(lista)
{
    var calificacionesPonderadas = lista.map(
        function (elemento)
        {
            return elemento.calificacion * elemento.ponderacion;
        }
    );

    var sumatoriaCalificaciones =  calificacionesPonderadas.reduce(
        function (sumatoria, iterador)
        {
            return sumatoria + iterador;
        }
    );


    var ponderaciones = lista.map(
        function (elemento)
        {
            return elemento.ponderacion;
        }
    );

    var sumaPonderaciones = ponderaciones.reduce(
        function (sumaPonderaciones = 0, ponderacion)
        {
            return sumaPonderaciones + ponderacion;
        }
    );

    return sumatoriaCalificaciones / sumaPonderaciones;
}

alert(calcularPromedioPonderado(calificaciones));