const userName = document.getElementById('userName');
const userEmail = document.getElementById('userEmail');
const userPwd = document.getElementById('userPwd');

const form = document.getElementById('form-signup');

var db_users = JSON.parse(localStorage.getItem('db_users'));

// Event Listener
form = document.addEventListener('submit', function(e) {
    register();
    e.preventDefault();
});

function register() {
    var key = "db_users"
    var obj = [];

    if (localStorage.hasOwnProperty(key)) {
        obj = JSON.parse(localStorage.getItem(key));
    }

    obj.push({
        userName: userName.value,
        userEmail: userEmail.value,
        userPassword: userPwd.value
    })
    
    localStorage.setItem(key, JSON.stringify(obj));

    location.href = "/Trabalho/pages/entrar.html";
}