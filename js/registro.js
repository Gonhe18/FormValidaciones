console.log("Registro linkeado exitosamente");
// 1) Que el input del email contenga el caractér "@".
// 2) Que ambos inputs de contraseña tengan más de 12 caracteres Y coincidan EXACTAMENTE.

                                            //Versión1

// MANEJO Y VISUALIZACION DE ERRORES (ALERT()):
// A través del método alert(), avisarle al usuario si hay algún error en alguno de los campos(inputs).
// ¿Cómo se genera la validacion y la visualizacion de errores? Toda vez que el usuario haga click en el bottón, sea para logguearse o sea para registrarse.

// let msjExito = document.createElement("p");                            //Creo nuevo elemento para msj de msjExito
// msjExito.innerHTML = `<img src="./Icon/Check.png"> Registro exitoso`;  //Le agrego un icono al texto
// msjExito.setAttribute("id","registExito");                             //Le doy un id como atributo
// msjExito.setAttribute("class","oculto");                               //Lo oculto
// let mainResgis = document.querySelector("#main");                       //Llamo a etiqueta donde agrego al nuevo elem
// mainResgis.insertAdjacentElement("beforeend", msjExito);               //Inserto elemento después de último hijo

// let $btnlogin = document.querySelector("#registro-btn");
// $btnlogin.addEventListener("click", ()=>{
//     let mail = document.querySelector("#registro-email").value;
//     let pass = document.querySelector("#registro-password1").value;
//     let newPass = document.querySelector("#registro-password2").value;

//     if (mail.includes("@")==false){
//         return alert("El formato de mail es incorrecto, verifique y vuelva a intentarlo");
//     }
//     else if (pass.length < 12){
//         return alert ("Contraseña demasiado corta, vuelva a intentaro");
//     }
//     else if(pass!== newPass){
//         return alert ("Las contraseñas con coinciden, vuelva a intentaro");
//     }
//     if(mail.includes("@")==true && pass.length >= 12 && pass === newPass){
//         msjExito.removeAttribute("class","oculto");
//         msjExito.setAttribute("class","exito-msg"); 
//     }
// })
                                            //Versión 2

// MANEJO Y VISUALIZACION DE ERRORES (DOM):
// Ahora, en vez de usar alert(), vamos avisarle al usuario si hay algún error en alguno de los campos(inputs) pero a través del DOM. A tal fin, puede resultar útil la clase .error-msg (ver style.css).
// La idea sería que, justo debajo del campo(input) erroneo, aparezca el mensaje de error (en letras rojas, ie: .error-msg).
// En caso que cometa errores en más de un campo(input), que aparezcan los mensajes necesarios para cada input, justo debajo del mismo.

// En caso que el usuario complete correctamente los campos (inputs), pasando todas las validaciones correctamente, que aparezca un mensaje a través del DOM indicando que el login o el registro son exitosos. Para ello, puede resultar útil usar la clase .exito-msg.

// ¿Cómo se genera la validacion y la visualizacion de errores? Toda vez que el usuario haga click en el bottón, sea para logguearse o sea para registrarse.

let mailresgistro = document.querySelector("#registro-email")        //Tomo input del mail
let textMail = document.querySelector("#emailHelp").textContent;     //Guardo texto original del primer input
mailresgistro.setAttribute("placeholder","mail@mail.com");           //Le agrego referencia para ingreso de mail

let passRegistro = document.querySelector("#registro-password1");  //Tomo input del password
passRegistro.setAttribute("pattern",".{12,}");                     //Atributo que debe cumplirse para ser valido

let newRegist = document.querySelector("#registro-password2")         //Tomo input de la validacion delpassword
newRegist.setAttribute("pattern",".{12,}");                           //Atributo que debe cumplirse para ser valido

//Mensajes para la validación de password

let primerPass = document.createElement("div");                 //creo nuevo elemento para introducir msj error
primerPass.setAttribute("id","password-1");                     //le doy atributos
primerPass.innerText = "Contraseña incorrecta, debe tener mínimo 12 carácteres"  //Ingreso msj de error
primerPass.setAttribute("class","oculto");                      //Lo oculto
let pass1 = document.querySelector("#registro-div-password1");  //tomo etiqueta donde metería el nuevo elemento
pass1.setAttribute("class", "form-text")                        //le doy atributo
pass1.insertAdjacentElement("beforeend",primerPass);            //Inserto elemento desp de último hijo del div

let segundoPass = document.createElement("div");               //creo nuevo elemento para introducir msj error
segundoPass.setAttribute("id","password-2");                   //le doy atributos
segundoPass.innerText = "Las contraseñas no coinciden";        //Ingreso msj de error
segundoPass.setAttribute("class","oculto");                    //Lo oculto
let pass2 = document.querySelector("#registro-div-password2"); //tomo etiqueta donde metería el nuevo elemento
pass2.setAttribute("class", "form-text")                       //le doy atributo
pass2.insertAdjacentElement("beforeend",segundoPass);          //Inserto elemento desp de último hijo del div

//Creación de mensaje exitoso
let exitoPass = document.createElement("p");                            //Creo nuevo elemento para msj de exitoPass
exitoPass.innerHTML = `<img src="./Icon/Check.png"> Registro exitoso`;  //Le agrego un icono al texto
exitoPass.setAttribute("id","registExito");                             //Le doy un id como atributo
exitoPass.setAttribute("class","oculto");                               //Lo oculto
let mainResgis = document.querySelector("#main");                       //Llamo a etiquete donde agrego al nuevo elem
mainResgis.insertAdjacentElement("beforeend", exitoPass);               //Inserto elemento después de último hijo

//Creación de evento
let $btonRegistro = document.querySelector("#registro-btn");
$btonRegistro.addEventListener("click",()=>{
    let mail = document.querySelector("#registro-email").value;         //tomo valor del input del mail
    let pass = document.querySelector("#registro-password1").value;     //tomo valor del input de la contraseña
    let newPass = document.querySelector("#registro-password2").value;  //tomo valor del input de la contraseña
    let msjerror = document.querySelector("#emailHelp");                //tomo etiqueta para reemplazar msj por error

    if (mail.includes("@")==false){                                         //condicional
        msjerror.innerHTML = `Formato de mail incorrecto, debe llevar "@"`; //msj error
        msjerror.setAttribute("class","error-msg");                         //agrego estilo al msj
    }else{
        msjerror.innerHTML = textMail;                                      //Si da true vuelvo a poner msj inicial
        msjerror.removeAttribute("class","error-msg");                      //Elimino estilo de error
    }
    //Trabajando con password
    if (pass.length < 12){
        primerPass.removeAttribute("class","oculto");                        //Se muestra msj de error
        primerPass.setAttribute("class","error-msg");                        //Se da estilo al msj de error
    }else{
        primerPass.setAttribute("class","oculto");                           //Se oculta el msj de error
    }
    if (pass !== newPass){
        segundoPass.removeAttribute("class","oculto");                        //Se muestra msj de error
        segundoPass.setAttribute("class","error-msg");                        //Se da estilo al msj de error
    }else{
        segundoPass.setAttribute("class","oculto");                           //Se oculta el msj de error
    }
    if(mail.includes("@")==true && pass.length >= 12 && pass === newPass){  //Valido si se cumplen ambas condiciones
        exitoPass.removeAttribute("class","oculto");                        //Al ser true se muestra mensaje exitoso
        exitoPass.setAttribute("class","exito-msg");                        //Teniendo el formato definido
    }
})