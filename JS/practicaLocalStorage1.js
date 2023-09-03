
const inputMail = document.getElementById("mailID");
const inputPassword = document.getElementById("passwordID");
const botonAcceder = document.getElementById("acceder");
function guardar_totalUsuarios() {
    const usuarios = [
        { "correo": "user1@gmail.com", "password": "pass1" },
        { "correo": "user2@gmail.com", "password": "pass2" },
        { "correo": "user3@gmail.com", "password": "pass3" },
        { "correo": "user4@gmail.com", "password": "pass4" },
        { "correo": "user5@gmail.com", "password": "pass5" },
        { "correo": "user6@gmail.com", "password": "pass6" },
        { "correo": "user7@gmail.com", "password": "pass7" },
        { "correo": "user8@gmail.com", "password": "pass8" },
        { "correo": "user9@gmail.com", "password": "pass9" },
        { "correo": "user10@gmail.com", "password": "pass10" }
    ];
    localStorage.setItem("data", JSON.stringify(usuarios));
}
guardar_totalUsuarios();

botonAcceder.addEventListener('click', () => {
    const correo = inputMail.value;
    const password = inputPassword.value;
    const misUsuariosEnLocalStorage = JSON.parse(localStorage.getItem("data"));

    let coincidencias = misUsuariosEnLocalStorage.some(usuario => {
        return usuario.correo === correo && usuario.password === password;
    });

    if (coincidencias) {
        alert("felicidades accediste con exito")
    } else {
        alert("tu usuario y contraseña no son los correctos")
    }
});



// funciones para guardar e imprimir el local storage



/*
guardar_localstorage();
obtener_localstorage();



function obtener_localstorage() {
    if (localStorage.getItem("correo")) {
        correo = localStorage.getItem("correo");
        password = JSON.parse(localStorage.getItem("usuario")).password;
    } else {
        console.log("No hay entradas en el local storage");
    }
}

function guardar_localstorage() {
    let obj = {}

    for (let i = 0; i <= 10; i++) {
        obj["usuario" + i] = {
            correo: + i+"hola@",
            password: + i
        } ;

        localStorage.setItem("usuario", JSON.stringify(obj));
     } 
}


*/
