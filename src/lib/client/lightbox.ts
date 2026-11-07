import { localeFormatters } from "../format";

/**
 * The gallery lightbox: opens the full-size photograph, wraps next/previous,
 * mirrors arrow keys for RTL, and returns focus to the trigger on close.
 *
 * Direction and locale arrive from the server through data attributes; the
 * index digits come from the same formatter module the menus use.
 */
export function initLightbox(root: ParentNode = document): void {
  const gallery = root.querySelector<HTMLElement>("[data-gallery]");
  const dialog = root.querySelector<HTMLDialogElement>("[data-lightbox]");
  if (!gallery || !dialog) return;

  const triggers = Array.from(
    gallery.querySelectorAll<HTMLButtonElement>("[data-gallery-open]"),
  );
  if (!triggers.length) return;

  const image = dialog.querySelector<HTMLImageElement>("[data-lightbox-image]");
  const caption = dialog.querySelector<HTMLElement>("[data-lightbox-caption]");
  const counter = dialog.querySelector<HTMLElement>("[data-lightbox-counter]");
  const closeButton = dialog.querySelector<HTMLButtonElement>("[data-lightbox-close]");
  const previous = dialog.querySelector<HTMLButtonElement>("[data-lightbox-prev]");
  const next = dialog.querySelector<HTMLButtonElement>("[data-lightbox-next]");

  const format = localeFormatters(dialog.dataset.locale || "en");
  const isRtl = dialog.dataset.direction === "rtl";

  let index = 0;

  const render = () => {
    const trigger = triggers[index];
    if (!trigger || !image) return;

    image.src = trigger.dataset.full ?? "";
    image.alt = trigger.dataset.alt ?? "";
    image.hidden = false;

    if (caption) {
      caption.textContent = trigger.dataset.caption || trigger.dataset.alt || "";
    }
    if (counter) {
      counter.textContent = `${format.index(index + 1)} / ${format.index(triggers.length)}`;
    }
  };

  const show = (nextIndex: number) => {
    index = (nextIndex + triggers.length) % triggers.length;
    render();
  };

  triggers.forEach((trigger, triggerIndex) => {
    trigger.addEventListener("click", () => {
      show(triggerIndex);
      if (!dialog.open) dialog.showModal();
    });
  });

  closeButton?.addEventListener("click", () => dialog.close());
  previous?.addEventListener("click", () => show(index - 1));
  next?.addEventListener("click", () => show(index + 1));

  dialog.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index + (isRtl ? 1 : -1));
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + (isRtl ? -1 : 1));
    }
  });

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    if (image) {
      image.hidden = true;
      image.removeAttribute("src");
    }
  });
}
