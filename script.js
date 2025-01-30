// Cotação de moedas
const USD = 5.89;
const EUR = 6.14;
const GBP = 7.32;

// Obetando os elemetnso
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");

// Manipulando o input amount para receber somente números
amount.addEventListener("input", () => {
  const hasCharacterRegex = /\D+/g;
  amount.value = amount.value.replace(hasCharacterRegex, "");
});

//Captando o evento de submit do formulário.
form.onsubmit = (e) => {
  e.preventDefault();

  switch (currency.value) {
    case "USD":
      convertCurrency(amount.value, USD, "$");
      break;
    case "EUR":
      convertCurrency(amount.value, EUR, "€");
      break;
    case "GBP":
      convertCurrency(amount.value, GBP, "£");
      break;
  }
};

function convertCurrency(amount, price, symbol) {
  try {
    // Exibindo a cotação da moeda selecionada
    description.textContent = `${symbol}1 = ${formatCurrencyBRL(price)}`;

    // Calcula o total da conversão
    let total = amount * price

    // Exibe o resultado da conversão
    result.textContent = `${formatCurrencyBRL(total)}`


    // Aplica a classe que exibe o footer.
    footer.classList.add("show-result");
  } catch (error) {
    console.log(error);

    // Remove a classe que exibe o footer e exibe uma mensagem de erro.
    footer.classList.remove("show-error");
    alert("Ocorreu um erro durante a conversão.");
  }
}


// Formata a moeda em real brasileiro
function formatCurrencyBRL(value){
  // Converte para número para utilizar o toLocaleString para formatar no padrão BRL
  return Number(value).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
}
