# React template

Vite + React 19 + Tailwind 4 starter with an npm workspace, shared UI, and a container/view feature layout.

## Stack

| Package | Role |
|---------|------|
| `frontends/web` | Vite app (port 5173) |
| `@app/ui` | Shared presentational components and design tokens |
| `@app/utils` | Generic `request<T>()` fetch helper |
| `@app/types` | Shared TypeScript types |

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:5173. Other scripts: `npm run build`, `npm run lint`.

## Layout

```
packages/
  types/          # @app/types
  utils/          # @app/utils
  ui/             # @app/ui  (Icon, TopAppBar, DesktopNav, MobileTabBar, Modal)
frontends/web/
  src/
    App.tsx       # tab + settings modal
    app/          # AppShell view
    features/
      home/       # example feature (container + view + hook)
      more/       # second tab; opens a modal
```

Containers own state and hooks. Views receive props and render JSX. Import UI from `@app/ui`, never from a component file.

Replace `features/home` and `features/more` with your own screens. Tokens live in `packages/ui/src/tokens/colors.css`.
