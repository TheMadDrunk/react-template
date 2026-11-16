# TopAppBar

Fixed brand header with optional tune control and trailing slot (e.g. desktop nav).

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `title` | `string` | `'App'` | Wordmark in the bar |
| `onTune` | `() => void` | — | Opens settings when set |
| `trailing` | `ReactNode` | — | Slot for desktop nav |

## Usage

```tsx
<TopAppBar title="App" onTune={openSettings} trailing={<DesktopNav active={tab} />} />
```
