/* HireFlow demo interactions */
document.addEventListener("DOMContentLoaded", () => {
  if (window.lucide) window.lucide.createIcons();

  const year = document.querySelector("#current-year");
  if (year) year.textContent = new Date().getFullYear();

  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", () => {
      const plan = button.dataset.plan;
      const message = document.querySelector("#message");
      if (message) {
        message.value = `I'm interested in the ${plan} plan.`;
      }
    });
  });
});
