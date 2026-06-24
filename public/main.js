document.addEventListener("DOMContentLoaded", async () => {
  const potionsContainer = document.getElementById("potions-container");

  const response = await fetch("/potions");
  const potions = await response.json();

  potions.forEach((potion) => {
    const potionCard = document.createElement("div");
    potionCard.classList.add("potion-card");

    potionCard.innerHTML = `
      <img src="${potion.imagem}" alt="${potion.nome}" />
      <h3>${potion.nome}</h3>
      <p>${potion.descricao}</p>
      <p class="price">${potion.preco} moedas</p>
      <button>Comprar</button>
    `;

    potionsContainer.appendChild(potionCard);
  });
});
