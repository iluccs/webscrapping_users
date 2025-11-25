const container = document.getElementById("usuarios");

async function carregarUsuarios() {
  try {
    const response = await fetch("https://jsonfakery.com/users");
    const usuarios = await response.json();

    usuarios.forEach(usuario => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <img src="${usuario.profile_pic}" alt="Foto de ${usuario.first_name}" onerror="this.src='https://via.placeholder.com/150'">
        <h3>${usuario.first_name} ${usuario.last_name}</h3>
        <p class="email">${usuario.email}</p>
      `;

      container.appendChild(card);
    });

  } catch (erro) {
    console.log("Erro ao carregar usuários:", erro);
  }
}

carregarUsuarios();
