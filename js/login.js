const formularioLogin = document.querySelector("[data-form-login]")

formularioLogin.addEventListener("submit",(evento) => {
    evento.preventDefault()

    const mail = document.querySelector("[data-email]")
    const password = document.querySelector("[data-password]")

    comprobarlogin(mail,password);
})

const comprobarlogin = (mail,password) => {

    const error = document.querySelector("[data-error]");

    if(mail.value.includes("@admin.com") && password.value == "Admin123"){

        let loggedData = JSON.parse(sessionStorage.getItem("Login"))
        loggedData.user = "admin";
        loggedData.logged = true;
        sessionStorage.setItem("Login",JSON.stringify(loggedData))

        window.location.href = "../html/admin_page.html"
    }
    else{
        if(mail.value.includes("@admin.com") && password.value != "Admin123")
        {
            error.classList.remove("ocultar");
        }
    }
}