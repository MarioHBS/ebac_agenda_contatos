const form = document.getElementById('form-contato');

const nomes = [];
const telefones = [];
const favoritos = []; // array de boleanos

form.addEventListener('submit', function(e) {
    e.preventDefault();
})

function adicionarContato() {
    const nomeCnt = document.getElementById('nome-contato');
    const telCnt = document.getElementById('telefone-contato');

    if (nomes.includes(nomeCnt.value)) {
        alert(`O contato ${nomeCnt.value} já existe`);
    }
}