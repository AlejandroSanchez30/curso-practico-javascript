

var cupones = 
[
    {
        code: "desc10",
        discount: 10
    },

    {
        code: "desc20",
        discount: 20
    },

    {
        code: "desc30",
        discount: 30
    }


];


function validarCupon(cupon)
{   
    for(var i = 0; i < cupones.length; i++)
    {
       if(cupones[i].code == cupon)
       {
           return i;
       }
        
    }
    return 5;

}
function aplicarCupon(cupon)
{
    var indexCupon = validarCupon(cupon);

    if(validarCupon(cupon) < cupones.length)
    {
        
       return cupones[indexCupon].discount;
    }
    else
    {
        return 0;
    }
}

function calcularDescuento( precio, porcentajeDescuento)
{
    var precioFinal = 0;
    var descuento = 0;

    descuento = (porcentajeDescuento * precio) / 100;
    precioFinal = precio - descuento;
    console.log(descuento);
   return precioFinal

}

function descuento()
{
    var precio = document.getElementById("precioArticulo").value;
    var porcentajeDescuento = document.getElementById("porcentajeDescuento").value;
    var cupon = document.getElementById("cupon").value;

    var resultado = document.getElementById("resultPrice");

    precio = parseFloat(precio);
    porcentajeDescuento = parseFloat(porcentajeDescuento);

    var descuentoCupon = 0;
    descuentoCupon = aplicarCupon(cupon);
    
    
    precioFinal = calcularDescuento(precio, descuentoCupon + porcentajeDescuento);

    resultado.innerHTML = "El precio final es de: $" + precioFinal;
   
    
}