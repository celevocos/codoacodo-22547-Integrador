
const ticket = 200;
let porcentaje;
let totalEntradas;


nombre = document.getElementById("nombre");
mail = document.getElementById("mail");
apellido = document.getElementById("apellido");
cantidad = document.getElementById("cantidad");
categoria = document.getElementById("categoria");
form = document.getElementById("form");
inputs = document.querySelectorAll("#form input");


function elegirCategoria() {
    x = document.getElementById("categoria").value;

    switch (x) {
        case "1":
            console.log("elegi sin categoria");
            porcentaje = 0;
            break;
        case "2":
            console.log("elegi estudiante");
            porcentaje = 80;
            break;
        case "3":
            console.log("elegi traine");
            porcentaje = 50;
            break;
        case "4":
            console.log("elegi junior");
            porcentaje = 15;
            break;
    }

}

function calcularTotal() {

    cantEntradas = document.getElementById("cantidad").value;
    let descuento = porcentaje / 100; //0.80, 0.50...
    totalEntradas = (cantEntradas * ticket);  // total entradas sin descuento

    if (porcentaje > 0) {  //si tiene descuento
        valorDescuento = totalEntradas * descuento;
        totalEntradas = totalEntradas - valorDescuento;

        console.log("valorDescuento");
        console.log(valorDescuento);
    }
    //Lo muestro en el DIV
    document.getElementById("totalPagar").innerHTML = 'Total a pagar: $ ' + totalEntradas;
}



function borrar() {
    totalPagar.innerHTML = 'Total a pagar: $ ';

console.log(inputs);

 //Setea la clase de los input
inputs.forEach(input => {
    input.classList.remove("inputCorrecto");
    input.classList.remove("inputIncorrecto");
    
    input.value=""
});
categoria.classList.remove("inputCorrecto");
categoria.classList.remove("inputIncorrecto");
categoria.value=0;

}



function validarCampos(e) {
    switch (e.target.id) {
        case "nombre":
            if (nombre.value == null || nombre.value.length == 0 || /^\s+$/.test(nombre.value)) {
                //nombre.focus();
                nombre.classList.remove("inputCorrecto");
                nombre.classList.add("inputIncorrecto");
                //console.log(nombre);
            }
            else {
                nombre.classList.remove("inputIncorrecto");
                nombre.classList.add("inputCorrecto");
            }
            break;
            case "apellido":
                if (apellido.value == null || apellido.value.length == 0 || /^\s+$/.test(apellido.value)) {
                    apellido.classList.remove("inputCorrecto");
                    apellido.classList.add("inputIncorrecto");
                  
                }
                else {
                    apellido.classList.remove("inputIncorrecto");
                    apellido.classList.add("inputCorrecto");
                }
                break;    
        case "mail":
            if (!(/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(mail.value))) {
                 mail.classList.remove("inputCorrecto");
                mail.classList.add("inputIncorrecto");
            }
            else {
                mail.classList.remove("inputIncorrecto");
                mail.classList.add("inputCorrecto");
            }
            break;
        case "cantidad":
           // if(cantidad.value == null || cantidad.value < 0 || !isNaN(cantidad.value))  { 
            if(cantidad.value == null ||!/^[0-9]*(\.?)[ 0-9]+$/.test(cantidad.value)){
                console.log(isNaN(cantidad.value));
                console.log(cantidad.value);
                cantidad.classList.remove("inputCorrecto");
                cantidad.classList.add("inputIncorrecto");
            }
            else{
                console.log(isNaN(cantidad.value));
                cantidad.classList.remove("inputIncorrecto");
                cantidad.classList.add("inputCorrecto");
            }
            break;
        case "categoria":
          //  console.log(categoria.value)
             if( categoria.value == null || categoria.value == 0 ) 
             { 
                categoria.classList.remove("inputCorrecto");
                categoria.classList.add("inputIncorrecto");
            }
            else{
                console.log(isNaN(cantidad.value));
                categoria.classList.remove("inputIncorrecto");
                categoria.classList.add("inputCorrecto");
            }
    }

}

// LLama a los eventos para validar campos
inputs.forEach(input => {
    input.addEventListener("keyup", validarCampos);
    input.addEventListener("blur", validarCampos);
});
categoria.addEventListener("onChange", validarCampos);
categoria.addEventListener("blur", validarCampos);


document.getElementById("calcular").addEventListener("click", calcularTotal);
document.getElementById("reset").addEventListener("click", borrar);



/*nombre.addEventListener("keyup", validarCampos);
nombre.addEventListener("blur", validarCampos);
mail.addEventListener("keyup", validarCampos);
mail.addEventListener("blur", validarCampos);
apellido.addEventListener("keyup", validarCampos);
apellido.addEventListener("blur", validarCampos);
cantidad.addEventListener("keyup", validarCampos);
cantidad.addEventListener("blur", validarCampos);*/

/*
Categoria 
ninguna => 1
estudiante => 2
trainee  => 3
junior  => 4
*/

