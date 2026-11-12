/* Front-end-only demo request form with basic validation */
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");
  const messageBox = document.querySelector("#form-message");
  if (!form || !messageBox) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    messageBox.textContent = "";
    messageBox.className = "form-message";

    if (!form.checkValidity()) {
      form.reportValidity();
      messageBox.textContent = "Please complete the required fields with valid information.";
      messageBox.classList.add("error");
      return;
    }

    const name = form.elements.name.value.trim();
    messageBox.textContent = `Thanks, ${name}! Your demo request has been validated in this local preview. No data was sent.`;
    messageBox.classList.add("success");
    form.reset();
  });
});
