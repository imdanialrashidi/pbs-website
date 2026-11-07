/**
 * The site menu: open, close, contain focus, close on Escape and on the
 * desktop breakpoint. Accepts its root so it can run against any subtree.
 */
export function initMenu(root: ParentNode = document): void {
  const toggle = root.querySelector<HTMLButtonElement>("[data-menu-toggle]");
  const dialog = root.querySelector<HTMLDialogElement>("[data-menu]");
  if (!toggle || !dialog) return;

  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-menu-close]");
  const isOpen = () => dialog.hasAttribute("open");

  const open = () => {
    if (isOpen()) return;
    dialog.showModal();
    toggle.setAttribute("aria-expanded", "true");
  };

  const close = () => {
    if (isOpen()) dialog.close();
  };

  toggle.addEventListener("click", open);
  closeButton?.addEventListener("click", close);

  dialog.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  dialog.addEventListener("close", () => {
    toggle.setAttribute("aria-expanded", "false");
  });

  const desktop = window.matchMedia("(min-width: 1024px)");
  desktop.addEventListener("change", (event) => {
    if (event.matches) close();
  });

  // Keep keyboard focus inside the modal menu, including at the edges.
  dialog.addEventListener("keydown", (event) => {
    if (event.key !== "Tab") return;

    const focusable = Array.from(
      dialog.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      ),
    ).filter((element) => element.getClientRects().length > 0);

    if (!focusable.length) return;

    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && isOpen()) close();
  });
}
