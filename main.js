const formadd = document.getElementById('form-add');
const nomes = [];
const numeros = [];

let outralinha = '';

formadd.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaNumcont();

});
    
function adicionaLinha() {
    const inputnome = document.getElementById('input-nome');
    const inputnumber = document.getElementById('input-number');

    nomes.push(inputnome.value);
    numeros.push(parseInt(inputnumber.value));
    
    let linha = '<tr>';
    linha += `<td>${inputnome.value}</td>`;
    linha += `<td>${inputnumber.value}</td>`
    linha += `<button>[Excluir]</button>`
    linha += '</tr>';
    
    outralinha += linha;
    
    inputnome.value = '';
    inputnumber.value = '';
}
    
function atualizaTabela() {
    const CorpoTabela = document.querySelector('tbody');
    CorpoTabela.innerHTML = outralinha;
}

function atualizaNumcont() {
    document.getElementById('result').innerHTML = numeros.length;
    let num = 0;
    
    for (let i = 0; i< numeros.length; i++) {
        result += numeros[i];
    }
}
