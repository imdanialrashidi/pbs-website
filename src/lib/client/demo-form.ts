/**
 * The simulated demo form: validate, announce success in a live region, reset.
 * It never sends anything — the copy explaining that lives in the config.
 */
export function initDemoForm(root: ParentNode = document): void {
  root.querySelectorAll<HTMLFormElement>("[data-demo-form]").forEach((form) => {
    const status = form.querySelector<HTMLElement>("[data-form-status]");

    form.addEventListener("input", () => {
      if (!status) return;
      status.textContent = "";
      status.classList.remove("form-status--success");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      if (status) {
        status.textContent = form.dataset.success || form.dataset.successFallback || "";
        status.classList.toggle("form-status--success", Boolean(status.textContent));
      }

      form.reset();
    });
  });
}
