let users = []
let usersFiltered = []
let userSelected;
document.addEventListener('DOMContentLoaded', ()=> {
    fetch('https://randomuser.me/api/?results=6')
    .then(response => response.json())
    .then(data => {
        try {
            users = data.results;
            setData(users);
        } catch (error) {
            console.log(error)
        }  
    });
})

const setData = (users)=>{
    let html = ``;
    users.map((user)=>{
        html += `<div class="card col-12 col-md-4 col-xl-3 m-3 " >
                    <a data-bs-toggle="modal" data-bs-target="#addUserModal" onclick="sendUserToModal('${user.email}')">
                        <img src="${user.picture.large}" class="card-img-top" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                            <p class="card-text">${user.location.country}</p>
                            <p class="card-text" ><small class="text-muted">${user.email}</small></p>
                            <p class="card-text"><small class="text-muted">${user.cell}</small></p>
                        </div>
                    </a>
                </div>`
    }) 
    let container = document.getElementById("container-cards")
    container.innerHTML = html;
} 

const setDataFavorites = ()=>{
    let html = ``;
    let favoritesUser = JSON.parse(localStorage.getItem("users"))
    let container = document.getElementById("container-cards-favorites")
    if(favoritesUser != null){
        favoritesUser.map(user=>{
            html += `<div class="card col-12 col-md-4 col-xl-3 m-3 d-flex align-items-center">
            
                <img src="${user.picture.large}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title">${user.name.first} ${user.name.last}</h5>
                <p class="card-text">${user.location.country}</p>
                <p class="card-text" ><small class="text-muted">${user.email}</small></p>
                <p class="card-text"><small class="text-muted">${user.cell}</small></p>
                </div>
                </div>`
        }) 
        
        container.innerHTML = html;
    } else {
        container.innerHTML = "<h2>Aún no ha agregado favoritos</h2>";
    }
}

const fitlerUsersGender = (gender) => {
    if(gender==="all"){
        setData(users)
    }else{
        usersFiltered =  users.filter(user => user.gender === gender);
        setData(usersFiltered)
    }
}

const filterUsersName = (text) => {
    if(text===""){
        setData(users)
    }else{
        usersFiltered =  users.filter(user => JSON.stringify(user).toLowerCase().includes(text.value.toLowerCase()));
        setData(usersFiltered)
    }
}

const sendUserToModal = (email)=>{
    let emailTmp = document.getElementById("user")
    let user = users.find(user=> user.email === email)
    emailTmp.innerHTML = user.name.first+" "+user.name.last
    userSelected = user;
}

const saveUserSessionStorage = ()=>{
    let users = localStorage.getItem("users");
    if(users){
        users = JSON.parse(users);
        users.push(userSelected);
    }else{
        users =[];
        users.push(userSelected);
    }
    localStorage.setItem('users',JSON.stringify(users))
}

const deleteUserSessionStorage = ()=>{
    let users = localStorage.getItem("users");
    if(users){
        localStorage.removeItem("users")
        let container = document.getElementById("container-cards-favorites")
        container.innerHTML = "";
        document.querySelector("#alerta").style.display = "block"
        setTimeout(() => {
            document.querySelector("#alerta").style.display = "none"
        }, 2000);
    }
}