# Storybook Teachin

A small **React + Vite + TypeScript** project set up for learning [Storybook](https://storybook.js.org/). The repo includes several UI components under `src/components/`. **Button** already has a reference story file; **Badge**, **Card**, and **Stat** are yours to document with stories.

## Prerequisites

- [Node.js](https://nodejs.org/) 20 or newer (LTS recommended)
- npm (bundled with Node)

## Quick start

```bash
npm install
npm run storybook
```

Storybook opens at [http://localhost:6006](http://localhost:6006). The Vite app (optional) runs with `npm run dev`.

---

## Tutorial: step by step

### 1. Orient yourself

- **Components** live in `src/components/`. Each component has a `.tsx` file and a co-located **CSS module** (`.module.css`).
- **Stories** are files matching `*.stories.tsx` (or `.ts` / `.jsx`). Storybook discovers them via `.storybook/main.ts`.
- Open `src/components/Button.tsx` and `src/components/Button.stories.tsx` side by side. Notice how props such as `variant` and `children` map to **args** in the story file.

### 2. Run Storybook and use the UI

1. Run `npm run storybook`.
2. In the sidebar, open **Components → Button**.
3. Try the **Controls** panel: change `variant`, toggle `disabled`, edit **children** text.
4. Open the **Accessibility** addon tab (if visible) and read any hints. Good stories make keyboard and screen-reader behavior easy to check in isolation.

### 3. Deconstruct the reference story (`Button.stories.tsx`)

Read the file in this order:

1. **`meta`** — Describes the component: `title` (sidebar path), `component`, optional `tags` like `autodocs`, and `argTypes` for nicer controls.
2. **`export default meta`** — Storybook’s entry point for this file.
3. **`Story` type** — `StoryObj<typeof meta>` gives typed args for each story.
4. **Named exports** (`Primary`, `Secondary`, …) — Each export is one story: a state you can bookmark, screenshot, or test.

**Teaching point:** Stories are just ES modules. The default export is configuration; named exports are individual scenarios.

### 4. Exercise — `Badge`

Create `src/components/Badge.stories.tsx`.

**Goals:**

- Sidebar path: **Components → Badge** (use `title: "Components/Badge"` in `meta`).
- Cover **all** `tone` values: `neutral`, `success`, `warning`, `danger` (one story per tone, or use a small set of exports).
- Add `tags: ["autodocs"]` so the Docs page generates from your stories.
- Use `argTypes` so **tone** is a select control.

**Hints:**

- Import `Badge` and use `satisfies Meta<typeof Badge>` like the Button file.
- `children` can be short label text, e.g. `"Beta"` or `"Shipped"`.

### 5. Exercise — `Stat`

Create `src/components/Stat.stories.tsx`.

**Goals:**

- Stories for different **trends**: `up`, `down`, `flat`.
- At least one story with a **hint** and one without.
- Try both **numeric** and **string** `value` (the prop is `number | string`).

**Stretch:** In one story, pass a `className` from the story args (the component spreads extra `div` props) to tweak spacing — useful for composition demos.


### 7. Build a static Storybook site

```bash
npm run build-storybook
```

Output goes to `storybook-static/`. Open `storybook-static/index.html` in a browser (via a static server if needed) to verify the production build.

### 8. Discussion prompts (classroom)

- Why co-locate `*.stories.tsx` next to components instead of a distant `stories/` folder?
- When would you use **MDX** docs (`*.mdx`) instead of only `autodocs`?
- How do stories help **before** visual regression or E2E tests exist?

---

## Project scripts

| Script                 | Purpose                    |
| ---------------------- | -------------------------- |
| `npm run dev`          | Vite dev server for the app |
| `npm run build`        | Typecheck + production build |
| `npm run storybook`    | Storybook dev server       |
| `npm run build-storybook` | Static Storybook output |

---

## Repo layout

```text
.storybook/          # Storybook config (main + preview)
src/
  components/        # Practice components + Button reference story
  App.tsx            # Minimal demo page using the components
  main.tsx
  index.css          # Global styles (imported in Storybook preview)
index.html
package.json
```

---

## License

See [LICENSE](LICENSE) in this repository.
