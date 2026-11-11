/**
 * Highlights the section a reader is currently inside. It is progressive
 * enhancement: without JavaScript, every link still works and nothing is
 * hidden. The observer is limited to section links on the current page.
 */
export function initSectionNav(root: Document = document): void {
  const links = Array.from(
    root.querySelectorAll<HTMLAnchorElement>("[data-nav-section]"),
  );
  if (links.length === 0) return;

  const byId = new Map<string, HTMLAnchorElement[]>();
  for (const link of links) {
    const id = link.dataset.navSection;
    if (!id) continue;
    const list = byId.get(id) ?? [];
    list.push(link);
    byId.set(id, list);
  }

  const sections = Array.from(byId.keys())
    .map((id) => root.getElementById(id))
    .filter((section): section is HTMLElement => Boolean(section));

  if (sections.length === 0 || !("IntersectionObserver" in window)) return;

  let active: string | null = null;

  const setActive = (id: string | null) => {
    if (id === active) return;
    active = id;

    for (const [sectionId, sectionLinks] of byId) {
      for (const link of sectionLinks) {
        if (sectionId === active) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      }
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

      if (visible[0]) setActive(visible[0].target.id);
    },
    {
      rootMargin: "-18% 0px -62% 0px",
      threshold: 0,
    },
  );

  for (const section of sections) observer.observe(section);

  const clearAtTop = () => {
    if (window.scrollY < 120) setActive(null);
  };

  clearAtTop();
  window.addEventListener("scroll", clearAtTop, { passive: true });
}
