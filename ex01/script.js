
function saudar() {
    // Obter o valor inserido pelo usuário no input
    var nome = document.getElementById("nomeInput").value;
  
    // Verificar se o campo nome não está vazio
    if (nome.trim() !== "") {
      // Chamar a função saudacao com o nome inserido pelo usuário
      saudacao(nome);
    } else {
      alert("Por favor, digite seu nome antes de saudar.");
    }
  }
  
  function saudacao(nome) {
    // Exibir a saudação com o nome inserido pelo usuário
    alert("Olá, " + nome + "! Bem-vindo(a).");
  }