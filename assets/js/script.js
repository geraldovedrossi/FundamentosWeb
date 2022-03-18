/*

*/

let nome = window.document.getElementById('nome')
let email = document.getElementById('email')
let assunto = document.getElementById('assunto')

function pressionar() {
    alert("Oloco, você clicou mesmo?!")
}

function validacao(id){
    let input = document.getElementById(id)
    let txt = document.querySelector('#valida'+id)

        if (input.value.length < 3) {
            txt.innerHTML = id + " inválido!"
            txt.style.color = 'red'
        } else {
            txt.innerHTML = id + " válido!"
            txt.style.color = 'green'
        }

}

function verificarCampos() {
    if(nome.value == "" || email.value == "" || assunto.value == "") {
        alert("Todos os campos devem ser preenchidos!")
    } else {
        alert("Sua menssagem foi enviada!")
    }
}

nome.style.width=assunto.width
email.style.width=assunto.width