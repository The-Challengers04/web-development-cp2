function validarFormulario() {
    var nome = document.getElementById("nome").value;
    var segundonome = document.getElementById("segundonome").value;
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    var confirmarSenha = document.getElementById("confirmar_senha").value;
    
    if (nome.length < 5) {
      alert("O nome deve ter no mínimo 5 caracteres.");
      return false;
    }

    if (segundonome.length < 5) {
        alert("O segundo nome deve ter no mínimo 5 caracteres.");
        return false;
      }
    
    if (email.indexOf("@") === -1) {
      alert("O e-mail deve conter o caractere '@'.");
      return false;
    }
    if (email.length < 5) {
        alert("O email deve ter no mínimo 5 caracteres.");
        return false;
    }

    if (senha.length < 6 || senha.length > 8) {
      alert("A senha deve ter entre 6 e 8 caracteres.");
      return false;
    }
    
    if (senha.length === 0 || senha !== confirmarSenha) {
      alert("As senhas não correspondem. Por favor, tente novamente.");
      return false;
    }
}