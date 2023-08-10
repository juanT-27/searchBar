let $container = document.querySelector(".products-container");

const productosArray = [
  {
    nombre: "zapatos",
    precio: 19.99,
    imagen:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
  },
  {
    nombre: "camisa",
    precio: 29.99,
    imagen:
      "https://images.unsplash.com/photo-1593726891090-b4c6bc09c819?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
  },
  {
    nombre: "pantalon",
    precio: 9.99,
    imagen:
      "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1394&q=80",
  },
];

const chatAnswers = [
  {
    value: 1,
    question: "Payment methods",
    answer:
      "Aceptamos tarjetas de crédito y débito (Visa, MasterCard, American Express), PayPal y transferencias bancarias.",
  },
  {
    value: 2,
    question: "Delivery time",
    answer:
      "El plazo de entrega varía según la ubicación y el tipo de envío que elijas. Normalmente, nuestros envíos demoran entre 3 y 4 días hábiles.",
  },
  {
    value: 3,
    question: "Follow your purchase",
    answer:
      "Una vez que tu pedido sea despachado, recibirás un correo electrónico con un enlace de seguimiento para rastrear el estado de entrega.",
  },
];

const arraySearch = (() => {
  function searchingProduct(input, arr) {
    let matchingProducts = arr.filter((element) =>
      element.nombre.toLowerCase().includes(input.toLowerCase())
    );

    if (!matchingProducts) {
      $container.innerHTML = "<h3> Product not Found </h3>";
    }

    return matchingProducts;
  }

  return { searchingProduct };
})();

const uiProducts = (() => {
  let $template = document.getElementById("cardProduct").content;
  let $fragment = document.createDocumentFragment();

  let $form = document.querySelector(".form");

  function showingProducts(arr) {
    $container.innerHTML = "";
    arr.forEach((element) => {
      $template.querySelector(".productName").textContent = element.nombre;
      $template.querySelector(".price").textContent = element.precio;
      $template.querySelector(".prdctImg").src = element.imagen;
      let $clone = document.importNode($template, true);
      $fragment.appendChild($clone);
    });
    $container.appendChild($fragment);
  }

  $form.addEventListener("input", (e) => {
    let value = e.target.value;
    let matchingProducts = arraySearch.searchingProduct(value, productosArray);
    showingProducts(matchingProducts);
  });

  return { showingProducts };
})();

function findAnswer(option, answerArray) {
  let accordion = document.querySelector(".accordion-body");
  let $templateuUserBox = document.querySelector("#userChatBox").content;
  let $templateChatBox = document.querySelector("#chatBot").content;


  let questionIndex = answerArray.findIndex(
    (answer) => answer.value === parseInt(option)
  );
  let answerText = answerArray[questionIndex].answer;
  let questionText = answerArray[questionIndex].question;

  $templateuUserBox.querySelector("#question").textContent = questionText;
  $templateChatBox.querySelector("#botAnswer").textContent = answerText;
  let $clone = document.importNode($templateuUserBox, true);
  let $botClone= document.importNode($templateChatBox, true);

  accordion.innerHTML=""

  accordion.appendChild($clone);

  setTimeout(() => {
    accordion.appendChild($botClone)
  }, 2000);
}

document.addEventListener("DOMContentLoaded", (e) => {
  uiProducts.showingProducts(productosArray);
});

document.addEventListener("submit", (e) => {
  e.preventDefault();
  if (e.target.classList.contains("chatForm")) {
    let option = document.querySelector("#select").value;
    findAnswer(option, chatAnswers);
  }
});
