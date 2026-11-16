# DesktopNav

Desktop Home / More tab triggers (Radix Tabs). Render inside `Tabs.Root`.

## Usage

```tsx
<Tabs.Root value={tab} onValueChange={setTab}>
  <TopAppBar trailing={<DesktopNav active={tab} />} />
</Tabs.Root>
```
