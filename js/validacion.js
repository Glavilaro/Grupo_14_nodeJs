export function validarFormulario(event){
    event.preventDefault();

    let miform=event.currentTarget;
    let isValid=true;
   
    console.log(event.currentTarget);

    isValid &= validarNombres(miform);

    isValid &= validarEmail(miform);

    isValid &= validarTelefono(miform);

    isValid &= validarConsulta(miform);

    isValid &= validarMedios(miform);

    isValid &= validarComentario(miform);
    
    
    

    if (isValid){
        alert("Formulario Enviado Correctamente");
    }

}

function validarNombres(miForm){
    let isValid=true;
    let nombre=miForm.querySelector("#nombreid");
    let nombreError=miForm.querySelector("#nombreError");

   // console.log(nombreError);

    if(nombre.value.trim().length <= 3){
        nombreError.style.display = 'block';
        isValid=false;
    }
    else{
        nombreError.style.display = 'none';
        
    }

    return isValid;
}


function validarEmail(miForm){
    let isValid=false;
    let email=miForm.querySelector("#emailid");
    let emailError=miForm.querySelector("#emailError");


    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (regex.test(email.value)){
        emailError.style.display = 'none';
        isValid=true;
    }
    else {
        emailError.style.display = 'block';
    }

    return isValid;
}



function validarTelefono(miForm){
    let isValid=true;
    let telefono=miForm.querySelector("#telefonoid");
    let telefonoError=miForm.querySelector("#telefonoError");

   // console.log(nombreError);

    if(!isNaN(telefono.value) && telefono.value.trim().length === 10 ){
        telefonoError.style.display = 'none';
    }
    else{
         telefonoError.style.display = 'block';
        isValid=false;
        
    }

    return isValid;
}



function validarConsulta(miForm){
    let isValid=true;
    let consulta=miForm.querySelector("#consultaid");
    let consultaError=miForm.querySelector("#consultaError");

   // console.log(nombreError);

    if(consulta.value === ""){
        consultaError.style.display = 'block';
        isValid=false;
    }
    else{
        consultaError.style.display = 'none';
        
    }

    return isValid;
}



function validarMedios(miForm){
    let isValid=false;
    let medios=miForm.querySelectorAll(".medios");
    let mediosError=miForm.querySelector("#mediosError");

   // console.log(nombreError);

    medios.forEach(element => {
        //console.log(element.checked);
        if(element.checked){
          isValid = true;
          
        }
    });


    if(!isValid){
        mediosError.style.display = 'block';
        isValid=false;
    }
    else{
        mediosError.style.display = 'none';
        
    }

    return isValid;
}



function validarComentario(miForm){
    let isValid=true;
    let comentario=miForm.querySelector("#comentarioid");
    let comentarioError=miForm.querySelector("#comentarioError");

   // console.log(nombreError);

    if(comentario.value.trim().length <= 10){
        comentarioError.style.display = 'block';
        isValid=false;
    }
    else{
        comentarioError.style.display = 'none';
        
    }

    return isValid;
}


