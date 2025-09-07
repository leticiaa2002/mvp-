# mvp-
projeto integrador
INDEX.HTML

<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Food-ID - Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Food-ID</h1>
    <p>comida segura🥗<p</p>

    <input type="email" id="email" placeholder="Digite seu e-mail">
    <input type="password" id="senha" placeholder="Digite sua senha">
    <button onclick="login()">Entrar</button>
    <p><a href="profile.html">Criar Conta</a></p>
    
  </div>
  <script src="app.js"></script>
</body>

</html> 

      DASHBOARD.html → TELAINICIAL
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Food-ID - Dashboard</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Bem-vindo ao Food-ID 👋</h1>
    <p>Escolha uma funcionalidade:</p>

    <div class="grid">
      <button onclick="alert('Em breve: Busca de Estabelecimento')">🏪 Estabelecimentos Seguros</button>
      <button onclick="carregarProdutos()">📦 Escanear Produto</button>
      <button onclick="alert('Em breve: Delivery Seguro')">🚚 Delivery Seguro</button>
      <button onclick="window.location.href='profile.html'">👤 Meu Perfil</button>
    </div>

    <ul id="lista-produtos"></ul>
  </div>
  <script src="app.js"></script>
</body>
</html>


PROFILE.HTML → CADASTRO DE PERFIL ALIMENTAR
<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <title>Food-ID - Perfil</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="card">
    <h1>Meu Perfil Alimentar</h1>
    <form id="perfilForm">
      <label><input type="checkbox" name="restricao" value="leite"> Leite</label><br>
      <label><input type="checkbox" name="restricao" value="gluten"> Glúten</label><br>
      <label><input type="checkbox" name="restricao" value="castanhas"> Castanhas</label><br>
      <label><input type="checkbox" name="restricao" value="ovos"> Ovos</label><br>
      <label><input type="checkbox" name="restricao" value="soja"> Soja</label><br>
      <br>
      <button type="button" onclick="salvarPerfil()">Salvar Perfil</button>
    </form>
  </div>
  <script src="app.js"></script>
</body>
</html>

STYLE.CSS

body {
  font-family: Arial, sans-serif;
  background: #f0f7f4;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.card {
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
  text-align: center;
  width: 300px;
}

h1 {
  color: #2b7a78;
}

input {
  display: block;
  margin: 10px auto;
  padding: 10px;
  width: 90%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #3aafa9;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  margin: 10px;
  border-radius: 5px;
  width: 90%;
}

button:hover {
  background: #2b7a78;
}

.grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
}

#lista-produtos {
  list-style: none;
  padding: 0;
  margin-top: 20px;
}

#lista-produtos li {
  background: #eafaf1;
  margin: 5px;
  padding: 10px;
  border-radius: 5px;
  text-align: left;
}

APP.JS

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

