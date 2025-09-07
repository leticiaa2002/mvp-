function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email && senha) {
    alert("Login realizado com sucesso!");
    window.location.href = "dashboard.html";
  } else {
    alert("Preencha e-mail e senha.");
  }
}

function carregarProdutos() {
  const produtos = [
    { nome: "Leite Integral", seguro: false, risco: "Contém lactose" },
    { nome: "Biscoito Sem Glúten", seguro: true },
    { nome: "Barrinha Vegana", seguro: true },
  ];

  const lista = document.getElementById("lista-produtos");
  if (!lista) return; // se não existir a lista (outra página), sai

  lista.innerHTML = "";

  produtos.forEach(produto => {
    const li = document.createElement("li");
    li.textContent = produto.nome + 
      (produto.seguro ? " ✅ Seguro" : " ❌ Risco: " + produto.risco);
    lista.appendChild(li);
  });
}

function salvarPerfil() {
  const checkboxes = document.querySelectorAll("input[name='restricao']:checked");
  const restricoes = Array.from(checkboxes).map(cb => cb.value);

  localStorage.setItem("perfil", JSON.stringify(restricoes));
  alert("Perfil salvo com sucesso!");
  window.location.href = "dashboard.html";
}
