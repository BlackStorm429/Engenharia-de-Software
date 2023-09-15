// Arquivo ongs.js

document.addEventListener('DOMContentLoaded', function () {
    // Verifique se há dados no localStorage
    var db_contatos_inicial = JSON.parse(localStorage.getItem('db_contato'));

    if (db_contatos_inicial && db_contatos_inicial.data) {
        var container = document.querySelector('#containerCard');
        var cardsHTML = '';

        // Iterar sobre os dados das ONGs e criar os cards
        db_contatos_inicial.data.forEach(function (ong) {
            cardsHTML += `
                <div class="col-12 col-sm-12 col-md-6 col-lg-3">
                    <div class="my-card">
                        <div class="card-img--container">
                            <img src="${ong.img}" class="img_pet" alt="Imagem ONG">
                        </div>
                        <div class="card-body">
                            <p class="card-text"><strong>ONG: ${ong.nome}</strong></p>
                            <p class="card-city">Cidade: ${ong.cidade}</p>
                            <a class="social" target="_blank" href="${ong.instagram}">Instagram</a>
                            <p class="complemento">Email: ${ong.email}</p>
                            <p class="card-tell">Telefone: ${ong.telefone}</p>
                            <a href="${ong.site}" target="_blank" class="col-12 btn_pet card-link">Site</a>
                        </div>
                    </div>
                </div>`;
        });

        // Inserir os cards gerados no elemento container
        container.innerHTML = cardsHTML;
    }
});
