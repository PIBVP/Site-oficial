
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

// Alterna o menu mobile
menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
};

// Fecha o menu ao rolar a página
window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
};

// Adiciona suporte ao dropdown no menu mobile
const dropdown = document.querySelector('.dropdown');
const dropdownMenu = dropdown.querySelector('.dropdown-menu');

dropdown.addEventListener('mouseover',   
() => {
  dropdownMenu.style.display = 'block';
});

dropdown.addEventListener('mouseout', () => {
  dropdownMenu.style.display   
= 'none';
});




class FormSubmit {
  constructor(settings) {
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if (this.form) {
      this.url = this.form.getAttribute("action");
    }
    this.sendForm = this.sendForm.bind(this); // Vincula o contexto
  }

  displayMessage(message, isSuccess = true) {
    this.form.innerHTML = `<h1 class="${isSuccess ? 'success' : 'error'}">${message}</h1>`;
  }

  getFormData() {
    const formData = new FormData(this.form); // Coleta os dados do formulário
    const formObject = {};
    formData.forEach((value, key) => {
      formObject[key] = value;
    });
    return formObject;
  }

  async sendForm(event) {
    event.preventDefault(); // Impede o envio padrão
    this.formButton.disabled = true;
    this.formButton.innerText = "Enviando...";
    try {
      const response = await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(this.getFormData()),
      });

      if (response.ok) {
        this.displayMessage("Mensagem enviada com sucesso!", true);
      } else {
        throw new Error("Falha no envio");
      }
    } catch (error) {
      this.displayMessage("Não foi possível enviar sua mensagem. Tente novamente.", false);
      console.error(error);
    } finally {
      this.formButton.disabled = false;
      this.formButton.innerText = "Enviar";
    }
  }

  init() {
    if (this.form) {
      this.form.addEventListener("submit", this.sendForm);
    }
    return this;
  }
}

const formHandler = new FormSubmit({
  form: "[data-form]",
  button: "[data-button]",
});

formHandler.init();

