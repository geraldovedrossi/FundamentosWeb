/*

*/

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function pressionar() {
    alert("Oloco, você clicou mesmo?!")
}

function verificarCampos() {
    if(nome.value == "" || email.value == "" || assunto.value == "") {
        alert("Todos os campos devem ser preenchidos!")
    } else {
        alert("Sua menssagem foi enviada!")
    }
}