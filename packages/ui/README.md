# @app/ui

Shared React UI. Views only — no fetch or session logic.

## Layout

```
src/
  tokens/           # colors.css + shared CSS helpers
  components/*/     # one component per folder
  index.ts          # public re-exports
```

Each component folder has `Component.tsx`, `index.ts`, and a static `Component.playbook.md`.

## Components

| Component | Playbook |
|-----------|----------|
| Icon | [icon/Icon.playbook.md](src/components/icon/Icon.playbook.md) |
| TopAppBar | [top-app-bar/TopAppBar.playbook.md](src/components/top-app-bar/TopAppBar.playbook.md) |
| DesktopNav | [desktop-nav/DesktopNav.playbook.md](src/components/desktop-nav/DesktopNav.playbook.md) |
| MobileTabBar | [mobile-tab-bar/MobileTabBar.playbook.md](src/components/mobile-tab-bar/MobileTabBar.playbook.md) |
| Modal | [modal/Modal.playbook.md](src/components/modal/Modal.playbook.md) |

Import from the package root: `import { Icon, Modal } from '@app/ui'`.
