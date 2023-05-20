const inputName = document.querySelector("#nome");
const inputLastName = document.querySelector("#segundoNome");
const inputEmail = document.querySelector("#email");
const inputSenha = document.querySelector("#senha");
const inputConfirmSenha = document.querySelector("#confirmSenha");
const btnCadastrar = document.querySelector("#btnCadastrar");

inputName.fs = document.querySelector("#fsNome");
inputLastName.fs = document.querySelector("#fsSecNome");
inputEmail.fs = document.querySelector("#fsEmail");
inputSenha.fs = document.querySelector("#fsSenha");
inputConfirmSenha.fs = document.querySelector("#fsConfSenha");

// Função para lançar uma mensagem de erro no HTML
function throwErrorMessage(element, message)
{
    if(element.lastChild.classList == "error")
    {
        element.lastChild.textContent = message;
    }
    else
    {
        let errorMessage = document.createElement(errorMessageType);
        errorMessage.style.color = errorMessageColor;
        errorMessage.classList = "error"
        errorMessage.style.fontSize = errorMessageSize;
        errorMessage.textContent = message;
        element.appendChild(errorMessage);
    }
}

function basicValid(numOfCaract,element) // Verifica se o compo possui o minimo de caracteres e se não é vazio
{
  if(inputName.value.trim() == "")
  {
    //element não pode ser vazio
    let texto = `${element.name} não pode ser vazio`;
    throwErrorMessage(element.fs,texto);
  }
  else if(inputName.value.trim().length < numOfCaract)
  {
    //elemente não pode ser menor que numOfCaract
    let texto = `${element.name} não pode ser menor que ${numOfCaract} caracteres`;
    throwErrorMessage(element.fs,texto);
  }
  else
  {
    //Esta dentro dos padrões

  }
}


// function validarFormulario() {
//     var nome = document.getElementById("nome").value;
//     var segundonome = document.getElementById("segundonome").value;
//     var email = document.getElementById("email").value;
//     var senha = document.getElementById("senha").value;
//     var confirmarSenha = document.getElementById("confirmar_senha").value;
    
//     if (nome.length < 5) {
//       alert("O nome deve ter no mínimo 5 caracteres.");
//       return false;
//     }
//     if (nome.trim() === "") {
//       alert("Por favor, preencha o campo 'Nome'.");
//       return false;
//     }

//     if (segundonome.length < 5) {
//         alert("O segundo nome deve ter no mínimo 5 caracteres.");
//         return false;
//       }

//       if (segundonome.trim() === "") {
//         alert("Por favor, preencha o campo 'Segundo nome'.");
//         return false;
//       }
    
//     if (email.indexOf("@") === -1) {
//       alert("O e-mail deve conter o caractere '@'.");
//       return false;
//     }
//     if (email.length < 5) {
//         alert("O email deve ter no mínimo 5 caracteres.");
//         return false;
//     }
//     if (email.trim() === "") {
//       alert("Por favor, preencha o campo 'E-mail'.");
//       return false;
//     }

//     if (senha.length < 6 || senha.length > 8) {
//       alert("A senha deve ter entre 6 e 8 caracteres.");
//       return false;
//     }
//     if (senha.trim() === "") {
//       alert("Por favor, preencha o campo 'Senha'.");
//       return false;
//     }
    
//     if (senha.length === 0 || senha !== confirmarSenha) {
//       alert("As senhas não correspondem. Por favor, tente novamente.");
//       return false;
//     }
//     if (confirmarSenha.trim() === "") {
//       alert("Por favor, preencha o campo 'Confirmar Senha'.");
//       return false;
//     }
// }