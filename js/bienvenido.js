const saveForm = (event)=>{
    let form = document.querySelector('.needs-validation')
    if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
        form.classList.add('was-validated')
      }else{
        let profile = {
            name: form.elements.name.value,
            last_name: form.elements.last_name.value,
            email: form.elements.email.value,
            id: form.elements.id.value,
            gender: form.elements.gender.value,
            age: form.elements.age.value
        }
        localStorage.setItem("profile",JSON.stringify(profile))

        document.querySelector(".btn-primary").classList.remove("btn-visible")
        document.querySelector(".btn-primary").classList.add("btn-hidden")
        document.querySelector(".btn-warning").classList.remove("btn-hidden")
        document.querySelector(".btn-warning").classList.add("btn-visible")
        document.querySelector("#alerta").style.display = "block"
        setTimeout(() => {
            document.querySelector("#alerta").style.display = "none"
        }, 2000);
      }
  }


const showProfile = () => {
  if(localStorage.getItem("profile")){
    const profile = JSON.parse(localStorage.getItem("profile"))
    document.querySelector("#title-modal").innerHTML = `<b>Hola</b> ${profile.name} ${profile.last_name} !!!`;
    document.querySelector("#name_m").innerHTML = `<b>Nombre</b>: ${profile.name}`;
    document.querySelector("#last_name_m").innerHTML = `<b>Apellidos</b>: ${profile.last_name}`;
    document.querySelector("#email_m").innerHTML = `<b>Correo</b>: ${profile.email}`;
    document.querySelector("#age_m").innerHTML = `<b>Edad</b>: ${profile.age}`;
    document.querySelector("#id_m").innerHTML = `<b>Cédula</b>: ${profile.id}`;
    document.querySelector("#gender_m").innerHTML = `<b>Género</b>: ${profile.gender}`;
    document.querySelector("#name").value = `${profile.name}`;
    document.querySelector("#last_name").value = `${profile.last_name}`;
    document.querySelector("#email").value = `${profile.email}`;
    document.querySelector("#age").value = `${profile.age}`;
    document.querySelector("#id").value = `${profile.id}`;
    document.querySelector("#gender").value = `${profile.gender}`;
    
  }else{
      document.querySelector("#subtitle").innerHTML = `RECUERDA INGRESAR LOS DATOS DE PERFIL DEPUÉS DE INICIAR SESIÓN`;
  }
  document.querySelector("#btn-profile").click();
}

  const goPage = ()=>{
    location.href = "/catalogo.html"
  }