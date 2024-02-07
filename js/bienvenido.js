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

  const goPage = ()=>{
    location.href = "/catalogo.html"
  }