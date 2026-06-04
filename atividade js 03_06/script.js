


const senha = document.getElementById("senha");
const mensagem = document.getElementById("mensagem")
const botaoM = document.getElementById("botaoM")
const souEstudante = document.getElementById("souEstudante")
const curso = document.getElementById("curso")

senha.addEventListener("input",
    function validarSenha() {
        if (senha.value.length < 8) {
            mensagem.textContent = "A senha deve ter pelo menos 8 caracteres.";
            mensagem.style.color = "red";
        } else {
            mensagem.textContent = "Senha válida!";
            mensagem.style.color = "green";
        }
    });

botaoM.addEventListener("click",
    function Ocultar() {
        if (senha.type === "password") {
            senha.type = "text";
            
        } else {
            senha.type = "password";
            
        }

    })

souEstudante.addEventListener("change",
    function exibeCurso() {
        if(souEstudante.checked){
            curso.style.display = "block";
    } else{
        curso.style.display = "none";
    }
})

