# Client Demo Starter — Agent Operating Guide

> **Audience:** Coding agents working with the DSH Workflow in a client-demo starter repository.  
> **Purpose:** Understand the project's *known* status, verify the *actual* working tree, and build or revise impressive client demos without rebuilding the starter each time.  
> **Prepared:** 2026-10-30. **Repository contents were not directly audited when this guide was authored.**
>
> **Current repository status (2026-10-31):** The starter has now been implemented.
> Use [AGENTS.md](AGENTS.md) and [README.md](README.md) for current architecture,
> commands, paths, and deployment. This document is retained as supplementary
> brief-intake, content-truth, and design-review guidance; the "current state"
> passages below describe the pre-build starting point.

## 0. Read this first

This is an **operating guide**, not an alternative DSH policy, a repository audit, or an instruction to migrate frameworks.

**Before making edits:**

1. Read the nearest `AGENTS.md` / `CLAUDE.md` instruction chain and the owning project documents.
2. Read this guide when the current task references it. DSH does **not** automatically load arbitrary Markdown files.
3. Inspect `git status`, the project manifest, the lockfile, relevant source files, and existing deployment workflows.
4. Confirm which mode applies: **maintain the reusable starter**, **create a new client demo from it**, or **revise an existing client demo**.
5. Choose the smallest applicable DSH skill. Never assume a previous agent finished a task unless the working tree and executed checks support it.

**Instruction precedence:** Current explicit user request and repository/DSH authoritative policies take priority. If this document disagrees with the actual repository, report the discrepancy and follow verified sources. Do not silently change public behavior, dependencies, or architecture to match this guide.

## 1. Project mission and current state

### 1.1 Confirmed context (from the owner, not an inspected checkout)

| Topic | Known fact |
| --- | --- |
| Project | `imdanialrashidi/web-app-demo-starter-template` |
| Repository URL | <https://github.com/imdanialrashidi/web-app-demo-starter-template> |
| Workflow | DSH Workflow with skills such as `build`, `verify`, and `review` |
| Intended output | Reusable starter for **different customers and industries**, not one fitness app or one business website |
| Delivery | High-quality, fast, mobile-first, image-rich client demos; static publishing on GitHub Pages is a primary target |
| Major pain points | Previous demos were slow after publishing, expensive to build with agents, and hard to modify |
| Business goal | Present a convincing demo quickly, obtain feedback, and adapt it without rewriting the entire application |

### 1.2 Not yet verified — discover in the checkout

**Do not treat any of these as established facts until inspected:**

- Current framework, package manager, runtime, dependency versions, or lockfile.
- Whether an Astro migration or any previous DSH implementation request has actually been completed.
- Actual directories, component interfaces, routing strategy, styling system, image handling, and content model.
- Existing build/test/typecheck/lint commands, their success, and their coverage.
- Existing GitHub Actions workflow, default branch, Pages configuration, published URL, or deployment status.
- Actual performance, browser functionality, responsive behavior, accessibility, and image licensing.

**Preferred target architecture previously discussed, not a description of the current codebase:** static-first Astro + TypeScript + Tailwind CSS; CSS/native animations; optional Svelte islands *only when justified*. Preserve an existing working stack unless a migration is explicitly in scope and its cost and compatibility have been evaluated.

### 1.3 Required first-session discovery report

Before substantial implementation, report a short, factual snapshot in the conversation:

```text
Current repository: <path, branch, dirty/clean state>
Actual stack: <manifest + lockfile evidence, or unknown>
App entry points: <verified file paths>
Existing reusable components: <verified paths>
Client configuration/content: <verified paths or not present>
Deployment: <verified workflow and base path, or unknown>
Real project commands: <commands from manifest/docs>
Baseline checks actually run: <command, cwd, exit code, status>
Main gaps blocking the requested outcome: <evidence>
```

Keep this snapshot in the session report unless the repository already has an owned status document. **Do not create a second, permanently maintained source of truth just to record observations.**

## 2. Three operating modes

### Mode A — Improve the reusable starter

Use when asked to improve the Template itself. Add *general-purpose* reusable capabilities, fix shared defects, and make customization easier. Preserve neutrality: do not turn the template into a real estate, gym, clinic, or restaurant website. One or more polished fictional examples may demonstrate the system, but they must not become coupled to the shared components.

Typical scope: central theme tokens, section library, typed configuration, image handling, responsive shell, static deployment support, focused tests, and concise documentation. Build only what is justified by a real reuse case.

### Mode B — Create a new client demo **from** the starter (default for client work)

Create a **separate working copy/repository** from the template when possible. Do not overwrite the canonical template with customer-specific names, images, copy, or design decisions.

Work from the supplied client brief. Prefer these changes, in order:

1. Existing client/brand configuration.
2. Content and appropriately licensed images.
3. Design tokens, typography, and visual direction.
4. Selection, ordering, and variants of existing sections.
5. Small improvements to reusable components **only when required**.
6. A new focused component only when existing components cannot satisfy an observable requirement.

A client demo must look purpose-designed for that client; **config-first does not mean identical layouts with different colors**.

### Mode C — Revise an existing client demo

Locate the exact feature, section, content item, and user-visible behavior being changed. Prefer a narrow edit to the relevant configuration or component. Preserve the rest of the demo. Do not start a redesign or framework migration for a copy, layout, or image change.

## 3. Client brief intake

Collect only what changes the implementation. Use sensible defaults for non-material gaps. Ask the owner only when a decision materially affects scope, risk, acceptance, or an irreversible action.

```yaml
# Illustrative intake shape, NOT an assumed repository schema.
client_name: "<name or clearly marked fictional demo brand>"
industry: "<industry>"
target_audience: "<who uses the site>"
primary_goal: "<booking | inquiry | purchase inquiry | sign-up | showcase>"
main_cta: "<exact text and intended action>"
pages_or_sections: ["<required sections>"]
language: "fa | en | other"
direction: "rtl | ltr"
brand_assets: "<provided logo, font, palette, photography, or none>"
visual_direction: "<specific mood, not just 'modern'>"
interaction_scope: "<what must really work in a static demo>"
content_sources: "<owner-provided facts, approved placeholders>"
publication: "<local preview | GitHub Pages configuration | explicit deploy approval>"
```

Do not fabricate real company addresses, prices, staff, credentials, testimonials, certifications, conversion rates, or product claims. Use clearly identified **fictional sample content** when the owner has not supplied real information. Preserve exact user-supplied Persian copy and identifiers; support RTL and appropriate fonts when relevant.

## 4. Default execution flow (DSH-aligned)

1. **Inspect.** Read owning instructions; identify what already exists and what should remain unchanged. Inspect the working tree before editing.
2. **Classify.** `quick-fix` for a truly narrow defect; `build` for a defined vertical slice; `spec` only when a consequential decision is genuinely open; `verify` for evidence-only; `review` for a no-edit diff review.
3. **Set an outcome.** State the user-visible result, in-scope work, explicit non-goals, and 3–7 observable acceptance criteria with matching proof.
4. **Build the smallest coherent slice.** One primary writer. Reuse the current architecture, components, and dependencies. For genuinely complex work, provide a *short* plan with a check per stage; do not write process documents by default.
5. **Check incrementally.** Run focused commands using scripts actually present in the repository. Diagnose failures, rather than retrying blindly or weakening checks.
6. **Inspect the complete diff.** Remove accidental edits, debug code, stale assets, and duplicated components.
7. **Review and report.** Record evidence for each acceptance criterion, unresolved gaps, and necessary owner actions. A no-edit review is separate from checks; independent review requires a fresh-context reviewer when available.

DSH discipline: a maximum of **two repair rounds** for validated review findings; then stop and reassess. Never bypass sandbox or approval controls. A task that cannot safely proceed is **blocked**, not “done.”

## 5. Design standards for client demos

Aim for a **convincing real product presentation**, not a generic AI-generated dashboard or a stack of identical cards.

- Start with the customer's value proposition, audience, desired CTA, and visual identity.
- Build the mobile composition first, including an excellent first viewport, readable typography, clear CTA, and comfortable touch targets.
- Use relevant, high-quality, licensed photography or owner-provided visuals. Apply intentional crop, contrast, and overlays. Do not fake downloaded assets or rely on unstable image URLs.
- Establish consistent tokens for colors, font roles, type scale, space, surface, borders, radii, and motion. Reuse existing tokens rather than creating scattered overrides.
- Vary layout structure appropriately between industries: editorial, service-led, product-led, portfolio-led, etc. No requirement to use every available section.
- Make navigation, accordions, tabs, galleries, filters, and form simulations actually respond to user input. A visually clickable control must not be inert.
- Use restrained, high-quality animation: CSS transitions, `transform`/`opacity`, native/browser APIs, and `prefers-reduced-motion`; add an animation library only for a demonstrated interaction need.
- Use semantic HTML, visible focus states, labels, useful `alt` text, and keyboard-operable controls.
- Explain plainly when a form, appointment, checkout, search, account, or analytics feature is simulated. Never present fake persistence or a fake transaction as a production integration.

**Failure states:** handle missing images, absent content, empty lists, invalid form inputs, and unavailable client assets gracefully. Do not ship broken placeholders or silent failures.

## 6. Architecture and change policy

Discover the actual code first. Use this **conceptual separation**, mapping to the repository's existing files where possible:

```text
Client brief / approved content
          ↓
Brand + theme configuration
          ↓
Page composition and content
          ↓
Reusable sections and UI primitives
          ↓
Optional, isolated interactive behavior
          ↓
Static production build / GitHub Pages
```

**Preferred edit strategy:** modify the narrowest owning layer. A brand-color change belongs in design tokens; a headline belongs in content/config; changing section order belongs in page composition; a truly new interaction belongs in an isolated interactive component. Do not change the global build configuration for cosmetic client requests.

Avoid unneeded abstractions, schema engines, full page builders, backend services, CMS, multiple client frameworks, global stores, giant component libraries, or speculative generalization. A repeatable starter is valuable because it stays understandable.

When touching architecture, public configuration shape, real build commands, or deployment contracts, update the **existing owning document** instead of creating a competing instruction source.

## 7. Images, animation, and mobile performance

For every photo-rich client demo:

- Prefer locally managed, properly licensed images with documented provenance where needed.
- Produce appropriately sized responsive assets, using the image optimization available in the actual framework. Use WebP/AVIF when supported; do not blindly convert everything if the quality or build cost is worse.
- Give images intrinsic dimensions or aspect-ratio to avoid layout shifts.
- Prioritize the primary above-the-fold image; lazy-load images below the fold.
- Avoid huge remote fonts, autoplay background video, perpetual parallax, expensive blur/filter effects, and unnecessary hydration.
- Use static rendering for content that needs no client-side state; keep interactive JavaScript isolated and measured.
- Test actual production output, not only the dev server. Re-test after changing images, fonts, routing, or animation.
- Respect reduced-motion and avoid scroll-jacking or long intro sequences.

**Measurements, not promises:** run baseline and after-change checks on comparable environments if claiming a speedup. Use actual Lighthouse, browser, network, or build reports when available. Targets such as good mobile Core Web Vitals are goals, not evidence. If measurement tools are unavailable, mark performance claims `unproven` or checks `blocked` / `unexecuted` as appropriate.

## 8. GitHub Pages compatibility

GitHub Pages is static hosting. A successful local dev server is **not** proof that the published site works.

Check the framework and its configuration rather than assuming Astro is installed:

- **Astro**: verify static output and `site` / `base` according to Astro's current documentation.
- **Vite**: verify `base` for the actual repository path.
- **SPA routing**: use a GitHub Pages-safe route strategy (e.g., hash-based routing), or an explicitly verified fallback. Do not assume server rewrites are available.
- All assets, internal links, CSS references, fonts, scripts, and navigation must work under `https://OWNER.github.io/REPO/` for a project site.
- Root/user sites and custom domains may require `/` instead. Discover deployment target; do not hardcode the template repository's name into client copies.
- Inspect the existing GitHub Actions pipeline and adapt it minimally, using supported official actions and least-privilege permissions.
- Check built asset references and run the production preview from the verified base path when possible.
- Do not claim a Pages URL is live without opening and verifying it after an authorized deployment.

**Boundary:** Creating or adjusting deployment *configuration* is not permission to commit, push, publish, open a PR, merge, release, or deploy. These require explicit approval in the current request.

## 9. Acceptance criteria for a typical new client demo

Choose only applicable criteria and pair each with an actual check or observation:

| ID | Observable criterion | Suitable proof |
| --- | --- | --- |
| A1 | First mobile viewport clearly presents the client's offer and one primary CTA | Browser check at 360px / 390px, if available |
| A2 | Required pages/sections exist, use approved copy/assets, and follow one coherent visual direction | Rendered-page and content inspection |
| A3 | All important visible controls have a meaningful outcome; simulated actions are labeled as demo behavior | Execute CTA/navigation/form happy and invalid/empty paths |
| A4 | Mobile and desktop layouts have no significant overflow, clipped CTAs, or inaccessible controls | Viewports 360px, 390px, 768px, 1440px and keyboard check |
| A5 | Production output builds with the real project scripts and no broken local asset paths | Actual build command + production preview / asset check |
| A6 | GitHub Pages subpath configuration is correct for the target repository | Inspect generated links/assets under target base path |
| A7 | The requested changes do not damage shared template structure or unrelated client content | Complete diff inspection and focused regression check |

If browser automation is unavailable, **do not mark A1/A3/A4 passed based solely on reading code or a screenshot**. Report precisely what was checked and what remains unproven.

## 10. Verification and final report contract

Discover commands from the actual `package.json`, CI, repository docs, task runner, or equivalent. **Never invent command names** (`npm run lint`, `pnpm check`, `astro check`, etc. are examples, not implied project scripts).

Use these exact statuses:

- `passed` — executed and succeeded.
- `failed` — executed and failed.
- `blocked` — a required tool, permission, service, or other prerequisite prevented execution.
- `unproven` — inferred or inspected but not demonstrated by execution.
- `unexecuted` — available/planned check was not run or was skipped.

Final report format:

```text
Changed: <files and user-visible behavior>
Mode: <starter maintenance | new client demo | revision>
Criteria: A1 <status + proof>; A2 <status + proof>; ...
Checks:
  - <command> | cwd=<path> | exit=<code or blocker> | <status> | <useful output>
Review: <confirmed findings, fixes, or no relevant findings>; independent review: <performed | unexecuted>
Not verified / residual risks: <explicit list>
Owner action: <needed decisions, manual Pages configuration, or none>
```

Do not bury unmet criteria under a generic “done” message. If an approval, product rule, or irreversible decision is missing, stop at that boundary and report the smallest next step.

## 11. Ready-to-send DSH task prompts

These **direct DSH messages** intentionally start with the skill token. The guide itself is not a skill. Fill the bracketed parts before sending.

### A. First: assess / improve the starter

```text
/build Improve the existing reusable client-demo starter without turning it into a client-specific website. Read AGENTS.md, DEMO_AGENT_GUIDE.md, and the repository's actual manifest, source, and deployment files. First report the verified stack, current architecture, real commands, and deployment state. Then implement the smallest coherent improvements to make client branding, content, section composition, image handling, mobile layouts, and GitHub Pages configuration easier and more reliable. Preserve existing functionality and user changes; do not migrate frameworks solely because a preferred stack is listed in the guide. Define 3–7 observable acceptance criteria with proof, run the repository's actual checks, inspect the diff, and report DSH's five statuses with command, working directory, exit code, and evidence. No commit, push, PR, or deployment.
```

### B. Next: create a client demo

```text
/build Create a polished, mobile-first client demo from this starter. Read AGENTS.md and DEMO_AGENT_GUIDE.md first; inspect the actual repository and preserve working template capabilities. Client brief: [PASTE BUSINESS TYPE, AUDIENCE, OFFER, CTA, CONTENT, BRAND ASSETS, REQUIRED PAGES, LANGUAGE AND DEMO INTERACTIONS]. Work in a client-specific copy rather than replacing the canonical starter. Use configuration, existing sections, and design tokens before adding components or dependencies. Deliver a distinctive, image-rich, responsive demo with functional primary interactions and clearly labeled simulated functionality. Verify relevant viewports, production build, GitHub Pages base path, and important empty/invalid states with available tools. Report exact commands, cwd, exit codes, and DSH statuses; be explicit about unproven visual checks. Do not commit, push, or deploy.
```

### C. Later: handle a client revision

```text
/quick-fix Apply this narrow client-demo revision: [EXACT CHANGE]. Read AGENTS.md and DEMO_AGENT_GUIDE.md; locate the owning configuration or component, preserve unrelated behavior, and inspect the working tree before editing. Make the smallest change, run the narrowest relevant real check, inspect the diff, and report command, cwd, exit code, and result. If the request actually changes architecture, contracts, or high-risk behavior, stop and switch to the appropriate DSH path. Do not commit, push, or deploy.
```

## 12. Ongoing maintenance of this guide

- Keep **known context** separate from **repo-verified facts** and **future architecture preferences**.
- After a major change, update only instructions that became inaccurate; use existing owning docs for exact scripts, versions, and architecture contracts.
- Do not add another overlapping `AGENTS.md` or override DSH Workflow rules.
- If the root `AGENTS.md` should direct future agents here, add a **short link** after inspecting the current instructions, for example: `For client-demo creation and maintenance, read DEMO_AGENT_GUIDE.md.`
- Re-verify against current DSH skills if the workflow evolves. The source prompting guide supplied by the owner was reviewed for DSH Workflow 0.1 / DSH 0.2.1-rc.2; that version is **not** a claim about the current installation.

---

**Core principle:** The starter's job is to make the **next** client demo faster to build, easier to change, more visually convincing, and safer to publish — without sacrificing truthful verification.
