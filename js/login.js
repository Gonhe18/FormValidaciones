console.log("Loggin cargado exitosamente");
// 1) Que el input del email contenga el caractér "@".
// 2) Que la contraseña tenga más de 12 caracteres.

                                            //Versión 1

// A través del método alert(), avisarle al usuario si hay algún error en alguno de los campos(inputs).
// ¿Cómo se genera la validacion y la visualizacion de errores? Toda vez que el usuario haga click en el bottón, sea para logguearse o sea para registrarse.

// let exito = document.createElement("p");                            //Creo nuevo elemento para msj de exito
// exito.innerHTML = `<img src="./Icon/Check.png"> Registro exitoso`;  //Le agrego un icono al texto
// exito.setAttribute("id","registExito");                             //Le doy un id como atributo
// exito.setAttribute("class","oculto");                               //Lo oculto
// let mainResgis = document.querySelector("#main");                       //Llamo a etiqueta donde agrego al nuevo elem
// mainResgis.insertAdjacentElement("beforeend", exito);               //Inserto elemento después de último hijo

// let $btnlogin = document.querySelector("#login-btn");
// $btnlogin.addEventListener("click", ()=>{
//     let mail = document.querySelector("#login-email").value;
//     let contraseña = document.querySelector("#login-password").value;
//     if (mail.includes("@")==false){
//         return alert("El formato de mail es incorrecto, verifique y vuelva a intentarlo");
//     }
//     else if (contraseña.length < 12){
//         return alert ("Contraseña demasiado corta, vuelva a intentaro");
//     }
//     if(mail.includes("@")==true && contraseña.length >= 12){
//         exito.removeAttribute("class","oculto"); 
//         exito.setAttribute("class","exito-msg"); 
//     }
// })
                                            //Versión 2

// Ahora, en vez de usar alert(), vamos avisarle al usuario si hay algún error en alguno de los campos(inputs) pero a través del DOM. A tal fin, puede resultar útil la clase .error-msg (ver style.css).
// La idea sería que, justo debajo del campo(input) erroneo, aparezca el mensaje de error (en letras rojas, ie: .error-msg).
// En caso que cometa errores en más de un campo(input), que aparezcan los mensajes necesarios para cada input, justo debajo del mismo.
// En caso que el usuario complete correctamente los campos (inputs), pasando todas las validaciones correctamente, que aparezca un mensaje a través del DOM indicando que el login o el registro son exitosos. Para ello, puede resultar útil usar la clase .exito-msg.
// ¿Cómo se genera la validacion y la visualizacion de errores? Toda vez que el usuario haga click en el bottón, sea para logguearse o sea para registrarse.

let inputmail = document.querySelector("#login-email")          //Tomo input del mail
let input = document.querySelector("#login-help").textContent;  //Guardo texto original del primer input
inputmail.setAttribute("placeholder","mail@mail.com");          //Le agrego referencia para ingreso de mail

let inputpass = document.querySelector("#login-password");      //Tomo input del password
inputpass.setAttribute("pattern",".{12,}");                     //Le doy atributo que debe cumplirse para ser valido

let textClave = document.createElement("div");              //creo nuevo elemento para introducir msj error
textClave.setAttribute("id","password-help");               //le doy atributos
textClave.innerText = "Contraseña incorrecta, debe tener mínimo 12 carácteres"  //Ingreso msj de error
textClave.setAttribute("class","oculto");                   //Lo oculto
let div = document.querySelector("#login-div-password");    //tomo etiqueta donde metería el nuevo elemento
div.setAttribute("class", "form-text")                      //le doy atributo
div.insertAdjacentElement("beforeend",textClave);            //Inserto elemento textClave desp de último hijo del div

let exito = document.createElement("p");                            //Creo nuevo elemento para msj de exito
exito.innerHTML = `<img src="./Icon/Check.png"> Logueo exitoso`;    //Le agrego un icono al texto
exito.setAttribute("id","textExito");                               //Le doy un id como atributo
exito.setAttribute("class","oculto");                               //Lo oculto
let main = document.querySelector("#main");                         //Llamo a etiquete donde agrego al nuevo elemento
main.insertAdjacentElement("beforeend", exito);                     //Inserto elemento después de último hijo

let $btnlogin = document.querySelector("#login-btn");           //Botón "login", inicia evento
$btnlogin.addEventListener("click", ()=>{                               //inicio evento
    let mail = document.querySelector("#login-email").value;            //tomo valor del input del mail
    let contraseña = document.querySelector("#login-password").value;   //tomo valor del input de la contraseña
    let msjerror = document.querySelector("#login-help");               //tomo etiqueta para reemplazar msj por error
    //     //Trabajando con input mail
    if (mail.includes("@")==false){                                         //condicional
        msjerror.innerHTML = `Formato de mail incorrecto, debe llevar "@"`; //msj error
        msjerror.setAttribute("class","error-msg");                         //agrego estilo al msj
    }else{
        msjerror.innerHTML = input;                                         //Si da true vuelvo a poner msj inicial
        msjerror.removeAttribute("class","error-msg");                      //Elimino estilo de error
    }
        //Trabajando con password
    if (contraseña.length < 12){
        textClave.removeAttribute("class","oculto");                        //Se muestra msj de error
        textClave.setAttribute("class","error-msg");                        //Se da estilo al msj de error
    }else{
        textClave.setAttribute("class","oculto");                           //Se oculta el msj de error
    }
    if(mail.includes("@")==true && contraseña.length >= 12){                //Valido si se cumplen ambas condiciones
        exito.removeAttribute("class","oculto");                            //Al ser true se muestra mensaje exitoso
        exito.setAttribute("class","exito-msg");                            //Teniendo el formato definido
    }
})
