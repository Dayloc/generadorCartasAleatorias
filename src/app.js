import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let cardNumber = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
  let suit = ["Diamonds", "Spades", "Hearts", "Clubs"];
  let timer;

  // Función para generar una nueva carta
  function generateCard() {
    let randomCardNumber = Math.floor(Math.random() * cardNumber.length);
    let randomSuitNumber = Math.floor(Math.random() * suit.length);
    let finalSuit = suit[randomSuitNumber];

    // Obtener el elemento de la carta
    let cardElement = document.getElementById("theCard");

    // Verificar si el elemento existe
    if (cardElement) {
      cardElement.className = ""; // Usa className en lugar de class
      cardElement.classList.add("card");
      cardElement.classList.add(getSuiteClass(finalSuit));

      // Agregar el número o letra de la carta
      cardElement.innerHTML = `
        <div class="corner top-left">
          <span>${cardNumber[randomCardNumber]}</span>
          <i class="${getSuitIcon(finalSuit)}"></i>
        </div>
        <div class="corner bottom-right">
          <span>${cardNumber[randomCardNumber]}</span>
          <i class="${getSuitIcon(finalSuit)}"></i>
        </div>
        <div id="cardContent">${cardNumber[randomCardNumber]}</div>
      `;
    } else {
      console.error("Elemento 'theCard' no encontrado en el DOM.");
    }
  }

  // Función para obtener la clase del palo
  function getSuiteClass(suit) {
    switch (suit) {
      case "Diamonds":
        return "suit-diamonds";
      case "Spades":
        return "suit-spades";
      case "Hearts":
        return "suit-hearts";
      case "Clubs":
        return "suit-clubs";
      default:
        return "";
    }
  }

  // Función para obtener el ícono del palo
  function getSuitIcon(suit) {
    switch (suit) {
      case "Diamonds":
        return "bi bi-suit-diamond-fill"; // Diamante
      case "Spades":
        return "bi bi-suit-spade-fill"; // Pica
      case "Hearts":
        return "bi bi-suit-heart-fill"; // Corazón
      case "Clubs":
        return "bi bi-suit-club-fill"; // Trébol
      default:
        return "";
    }
  }

  // Generar la primera carta al cargar la página
  generateCard();

  // Botón para generar una nueva carta
  document.getElementById("newCardButton").addEventListener("click", generateCard);

  // Temporizador para generar una nueva carta cada 10 segundos
  timer = setInterval(generateCard, 10000);

  // Controles para el tamaño de la carta
  document.getElementById("applySize").addEventListener("click", function () {
    let width = document.getElementById("widthInput").value;
    let height = document.getElementById("heightInput").value;

    if (width && height) {
      let cardElement = document.getElementById("theCard");
      if (cardElement) {
        cardElement.style.width = `${width}px`;
        cardElement.style.height = `${height}px`;
      } else {
        console.error("Elemento 'theCard' no encontrado en el DOM.");
      }
    } else {
      alert("Please enter valid width and height.");
    }
  });
};