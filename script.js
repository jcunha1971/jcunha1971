const form = document.querySelector("form");
const results = document.querySelector("#results");
const submitBtn = document.querySelector("button[type='submit']");

submitBtn.addEventListener("click", function(event) {
  event.preventDefault();

  const cakeSelect = document.querySelector("#cake-select");
  const cake = cakeSelect.options[cakeSelect.selectedIndex].value;

  const quantityInput = document.querySelector("#quantity-input");
  const quantity = quantityInput.value;

  const nameInput = document.querySelector("#delivery-name");
  const name = nameInput.value;

  const addressInput = document.querySelector("#delivery-address");
  const address = addressInput.value;

  results.innerHTML = 
    "<h2>Obrigado pelo seu pedido!</h2>" +
    "<p>Você pediu " + quantity + " " + cake + "(s)</p>" +
    "<p>Nome: " + name + "</p>" +
    "<p>Endereço: " + address + "</p>";
});
