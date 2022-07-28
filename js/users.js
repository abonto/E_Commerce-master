if(!sessionStorage.getItem("Login")){
    let loginData = {user: "client", logged: false}
    sessionStorage.setItem("Login",JSON.stringify(loginData));
}

let loggedData = JSON.parse(sessionStorage.getItem("Login"))

/*if(loggedData.logged && loggedData.user == "client" ){

    //Eliminamos el boton
    const botonlogin = document.querySelector("[data-btn-login]");
    botonlogin.parentNode.innerHTML = "";

    //Agregamos una imagen para reemplazar el boton
    const header = document.querySelector("[data-container-header]")
    const img = document.createElement("img");
    img.classList.add("header__perfil")

    img.src = "https://static9.depositphotos.com/1594920/1087/i/600/depositphotos_10879124-stock-photo-young-chimpanzee-simia-troglodytes-6.jpg"

    header.appendChild(img);
}*/

if(loggedData.logged && loggedData.user == "admin" ){

    const botonlogin = document.querySelector("[data-btn-login]");
    botonlogin.textContent = "ADMIN";
    botonlogin.addEventListener("click",(event)=>{
        event.preventDefault()
        window.location.href="./html/admin_page.html"
    })
}
