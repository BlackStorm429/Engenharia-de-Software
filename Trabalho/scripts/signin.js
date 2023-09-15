const userEmail = document.getElementById('userEmail');
const userPwd = document.getElementById('userPwd');

var form = document.getElementById('formSignin');

var db_users = JSON.parse(localStorage.getItem('db_users'));

// Event Listener
form = document.addEventListener('submit', function(e) {
    login();
    e.preventDefault();
});

function login() {
    var obj = [];
    const key = "db_users"
    if (localStorage.hasOwnProperty(key)) {
        obj = JSON.parse(localStorage.getItem(key));
    }
    if (obj.length == 0) {
        alert("Usuário não encontrado. Crie uma conta!")
    } else {
        for (var i = 0; i < obj.length; i++) {
            if (userEmail.value == obj[i].userEmail) {
                if (userPwd.value == obj[i].userPassword) {
                    location.href = "/Trabalho/index.html";
                    sessionStorage.setItem("loggedIn", true);
                } else {
                    alert("Senha ou email incorreto.");
                }
            } else {
                alert("Senha ou email incorreto.");
            }
        }
    }
}