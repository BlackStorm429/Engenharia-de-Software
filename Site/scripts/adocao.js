var db_pets_iniciais = {
    "data": [
        {
            "id": 1,
            "nome": "Leonardo Cabral",
            "pet": "Babão",
            "categoria": "Cachorro",
            "email": "leo.cabral.bh@gmail.com",
            "telefone": "31-99537-0230",
            "idade": "5",
            "raça": "Golden",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 2,
            "nome": "Cláudio Dutra",
            "pet": "George",
            "categoria": "Coelho",
            "email": "claudin14@gmail.tv",
            "telefone": "31-98475-0330",
            "idade": "3",
            "raça": "Angorá",
            "foto": "https://www.educolorir.com/foto-cachorro-filhote-dm19542.jpg"
        },
        {
            "id": 3,
            "nome": "Sérgio Pereira",
            "pet": "Bella",
            "categoria": "Cachorro",
            "email": "sergio89@yahoo.com",
            "telefone": "31-99564-3201",
            "idade": "2",
            "raça": "Yorkshire",
            "foto": "https://i.pinimg.com/474x/46/94/71/469471baeb89f12e5103cd614c7a684b.jpg"
        },
        {
            "id": 4,
            "nome": "Mario Pereira",
            "pet": "Estela",
            "categoria": "Gato",
            "email": "mario.pereira@yahoo.com",
            "telefone": "31-99564-9999",
            "idade": "2",
            "raça": "Siamês",
            "foto": "https://www.racoesreis.com.br/wordpress/wp-content/uploads/gato-origem.jpg"
        }


    ]
}

// primeiro momento pegamos o dados da aplicação
var array_pets = JSON.parse(localStorage.getItem('db_pets'));

onload = () => {
    if (!array_pets) {
        array_pets = db_pets_iniciais
    }
    localStorage.setItem('db_pets', JSON.stringify(array_pets));
    gerarLista()
};



// gera a lista dinamica dos pets cadastrados na aplicação
function gerarLista(){
    let tamanho = array_pets.data.length;
    for(let i = 0; i < tamanho; i++){
        $('#cards').append(
            '<div onclick="myFunction('+array_pets.data[i].id+')" class="col-12 col-sm-12 col-md-6 col-lg-3 align-items-stretch"><div class="card"><img src="'
                +array_pets.data[i].foto+'" class="img_pet"/><div class="card-body"><p class="card-text">'
                +array_pets.data[i].pet+'</p></div></div></div>');
     }
};
// chamada da lista na montagem da pagina



// chamada dos dados cadastrados na aplicação para visualização do pet clicado
// injeção de codigo html usando cards
function dialogPet(id){
    $('#meuPet').append(
        '<div id="controller" class="card-dialog text-start"><div class="card-body"><nav class="navbar navbar-light bg-navbar-dialog">'
        +'<nav class="navbar navbar-light bg-navbar-dialog"><div class="container d-flex justify-content-center">'
        +'<img src="assets/icon_dialog.png" alt="foto do pet" width="200" height="100"></div></nav>'
        +'</nav><div class="d-flex justify-content-start mt-4 flex-column"><div class="card-text border">Name: '+array_pets.data[id].pet+' </div>'
        +'<div class="card-text border">Raça: '+array_pets.data[id].raça+'</div><div class="card-text border">Idade: '+array_pets.data[id].idade+'</div>'
        +'<div class="card-text border">Nome do dono: '+array_pets.data[id].nome+'</div><div class="card-text border mb-4">Contato: '+array_pets.data[id].telefone+'</div></div>'
        +'<img src="'+array_pets.data[id].foto+'" class="img-dialog card-img-top" alt="...">'
        +'</div></div>');
};
// função de chamada da box de informações do pet clicado passando o id de cada pet
function myFunction(id) {
    var x = document.getElementById('myDialog');
    dialogPet(id - 1);
    x.open = true;
}

// função de fechamento da box das informações do pet
function closeDialog() {
    var x = document.getElementById('myDialog');
    $('#controller').remove();
    x.open = false;
}