
const enviar= ()=>{

    let email = document.querySelector("#email").value
    let interes = document.querySelector("#interes").value
    if(email==="" || interes ===""){
        alert("los campos email e interés son requeridos");
    }else{
        localStorage.setItem("inicioemail",email)
        localStorage.setItem("interes",interes)
        alert("Sus datos han sido guardados con éxito. Porfavor presione el botón mostrar datos");
    }
}

const mostrar= ()=>{
    let email= localStorage.getItem("inicioemail")
    let interes = localStorage.getItem("interes")
    if(email && interes){
        document.querySelector("#resumen-email").innerHTML=email
        document.querySelector("#resumen-interes").innerHTML=interes
        document.querySelector("#frm1").style.display="none"
        document.querySelector("#frm2").style.display="block"
    }else{
        alert("Debe registrar los datos primero");
    }
}