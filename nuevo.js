// console.log('hola')

let nombre = document.getElementById('nombre');

let apellido = document.getElementById('apellido');
let mail = document.getElementById('mail');
let password = document.getElementById('password');
var form = document.querySelector("form");
let parrafo = document.getElementById('warnings')

form.addEventListener('submit', e=>{
       e.preventDefault()
       let warnings = ''
       let entrar = false
       let regexEmail =  /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
       let regexContra = ''
       parrafo.innerHTML= ''
       if (nombre.value.length <6) {
              warnings += `El <B>NOMBRE</B>  no es valido <br>`
              nombre.style.border = '3px solid red'
              entrar = true
              
       } else{
              nombre.style.border = '3px solid green'
       }
        if (apellido.value.length <6) {
              warnings += `El <B>APELLIDO </B> no es valido <br>`
              apellido.style.border = '3px solid red'
              entrar = true
       } else{
             apellido.style.border = '3px solid green'
       }


                       

       if (!regexEmail.test(mail.value)) {
              warnings +=  `El <B>MAIL</B> no es valido <br> `
              mail.style.border = '3px solid red'
              entrar = true
              
       } else{
             mail.style.border = '3px solid green'
       }



       if (password.value.length <8) {
              warnings +=  `La <B>CONTRASEÑA</B> no es valida <br> `
              password.style.border = '3px solid red'
              entrar = true
              
       } else{
             password.style.border = '3px solid green'
       }


       

       if (entrar) {
              parrafo.innerHTML = warnings;
       } else {
              parrafo.innerHTML = 'Enviado'
              parrafo.style.color = 'green'
       }
       
})


const cajita = document.getElementById('cajita');


 


  const cambio = () => {

     
    
       if (password.type == 'password' ) {
         console.log('buenas')
         password.type = 'text';  
       } else {
         password.type = 'password'
       }
          

      }




cajita.addEventListener('click', cambio)



// const datos = ()=>{
    

//   if (nombre.value === '') {
//       alert ('llenar nombre')
//   } else if (apellido.value === ''){
//       alert ('llenar apellido')
//   } else if 

// }

// const boton = document.getElementById('boton')






























