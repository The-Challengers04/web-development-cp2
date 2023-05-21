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


const invalidColor = "#b61414"; // A cor que os elementos apresentam quando o input esta invalido

// CRIANDO MODELO DE MENSAGEM DE ERRO
const errorMessageType = "span";
const errorMessageSize = "12px";
const errorMessageColor = invalidColor;

// Obtenha o botão de alternar modo pelo ID
const darkModeBtn = document.getElementById('darkModeBtn');

// Adicione um ouvinte de eventos para o clique do botão
darkModeBtn.addEventListener('click', function() {
  // Obtenha o elemento body
  const body = document.body;
  // Alternar a classe dark-mode no body
  body.classList.toggle('dark-mode');

  // Atualizar o texto do botão com base no modo atual
  if (body.classList.contains('dark-mode')) {
    darkModeBtn.textContent = 'Modo Claro';
    body.style.backgroundColor = '#1f1f1f'
    body.style.color = '#ffffff'
  } else {
    darkModeBtn.textContent = 'Modo Escuro';
    body.style.backgroundColor = '#ffffff'
  body.style.color = '#1f1f1f'
  }
});

//Evitando que o formulário se submeta sem validação
const form = document.querySelector("form");

form.addEventListener('submit', e => {
  e.preventDefault();
})



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
  if(element.value.trim() == "")
  {
    //element não pode ser vazio
    let texto = `${element.name} não pode ser vazio`;
    throwErrorMessage(element.fs,texto);
  }
  else if(element.value.trim().length < numOfCaract)
  {
    //elemente não pode ser menor que numOfCaract
    let texto = `${element.name} não pode ser menor que ${numOfCaract} caracteres`;
    throwErrorMessage(element.fs,texto);
  }
  else
  {
    //Esta dentro dos padrões
    if(element.fs.lastChild.classList == "error")
    {
        element.fs.lastChild.remove();
    }

  }
}

inputName.addEventListener("blur",()=>{basicValid(5,inputName)});
inputLastName.addEventListener("blur",()=>{basicValid(5,inputLastName)});
inputEmail.addEventListener("blur",()=>{
  basicValid(5,inputEmail);
  if(!inputEmail.value.includes("@"))
    throwErrorMessage(inputEmail.fs,"Email Inválido");
});

inputSenha.addEventListener("blur",()=>{
  basicValid(6,inputSenha);
  if(inputSenha.value.trim().length > 8)
    throwErrorMessage(inputSenha.fs,"Senha pode ter no máximo 8 caracteres");
});

inputConfirmSenha.addEventListener("blur",()=>{
  if(inputConfirmSenha.value.trim() != inputSenha.value.trim())
  {
    throwErrorMessage(inputConfirmSenha.fs,"Senha diferente")
  }else
  {
    if(inputConfirmSenha.fs.lastChild.classList == "error")
    {
      inputConfirmSenha.fs.lastChild.remove();
    }
  }
});



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