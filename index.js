class ConfirmationDialog {
  #modalBox = document.createElement("div");
  #overlay = document.createElement("div");
  static modalContent = document.getElementById("modal-content");
  constructor(message = "", yes = "Yes", cancel = "Cancel") {
    this.message = message;
    this.yes = yes;
    this.cancel = cancel;
  }

  #addModalText = (text) => {
    let modalBoxText = document.createElement("p");
    modalBoxText.innerHTML = text;
    this.#modalBox.appendChild(modalBoxText);
  };

  #addModalButtons = (text, idName, clickFunction) => {
    let modalBoxButton = document.createElement("button");
    modalBoxButton.innerHTML = text;
    modalBoxButton.id = idName;
    modalBoxButton.onclick = clickFunction;
    this.#modalBox.appendChild(modalBoxButton);
  };

  showDialog = () => {
    document.body.appendChild(this.#modalBox);
    this.#overlay.id = "overlay";
    document.body.appendChild(this.#overlay);
    this.#modalBox.id = "modal-box";
    this.#modalBox.style.display = "block";
    this.#addModalText(this.message);
    this.#addModalButtons(this.yes, "yes-button", this.handleChoice);
    this.#addModalButtons(this.cancel, "cancel-button", this.handleChoice);
  };

}

const firstDialog = new ConfirmationDialog("Are you there?");
const secondDialog = new ConfirmationDialog(
  "Are you sure yo want to continue?",
  "Hell Yeah",
  "Not so Much"
);
console.log(firstDialog);
