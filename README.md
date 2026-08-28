# Five days to Omarchy

A static, 16:9 slide-deck website for onboarding onto [Omarchy](https://omarchy.org/) (Quattro): Arch + Hyprland + Quickshell. Five evenings, ~15 minutes each. Visuals use the [Inkblade](https://github.com/imcmurray/omarchy-inkblade-theme) palette.

Taught from the live manual — [omarchy.org/manual](https://omarchy.org/manual/) and the [quattro/manual](https://github.com/basecamp/omarchy/tree/quattro/manual) markdown. Hotkeys that are not in that manual are not on these slides.

## Run locally

```bash
cd omarchy-onboarding
python3 -m http.server 8080
```

Open [http://localhost:8080](http://localhost:8080). No backend, no login. Opening the HTML files from disk also works.

## What’s here

| Path | What |
| --- | --- |
| `index.html` | Series hub |
| `day-1/` … `day-5/` | Each day **is** the presentation |
| `assets/css`, `assets/js` | Inkblade theme, deck engine, keycaps, presenter view |
| `RECORDING.md` | Day 1 record flow (F11, OBS, YouTube copy) |
| `scripts/day-*.md` | Timed ~15 min speaker scripts |

## Presenting

- **Next:** Right, Space, Enter, or click
- **Prev:** Left, Backspace, or right-click
- **Home / End** first / last slide
- **F** fullscreen the 16:9 stage (or F11 the browser at 1920×1080)
- **S** or **P** presenter notes window (current slide, next, notes, elapsed)
- **Esc** exit fullscreen

Progress bar, slide count, and a small day label stay on-camera. Notes never do.

## Curriculum

1. **Intro** — adventure, Super, menu, Super+K, terminal + browser, help
2. **Navigation** — dwindle, workspaces, scratchpad, grouping, pop, float, Super+L
3. **Work** — top bar, clipboard, capture, notifications, a survey of the apps
4. **Make it yours** — themes, Inkblade install, `~/.config` vs `/usr/share/omarchy`
5. **Own it** — `omarchy` CLI, AI / Herdr, snapshots, encryption, series close

## Record

See [RECORDING.md](RECORDING.md). Record Day 1 first.

## Accuracy notes

Quattro differs from the legacy v3 manual on [learn.omacom.io](https://learn.omacom.io/2/the-omarchy-manual):

- `Super+Space` is the **Omarchy menu** (Spotlight/Start stand-in). `Super+Alt+Space` is apps-only.
- Configs are Lua: `hyprland.lua`, `bindings.lua`, `monitors.lua`, `looknfeel.lua`, plus `shell.json`.
- Package files live in `/usr/share/omarchy` (not `~/.local/share/omarchy`).
- Default terminal is foot. The bar is Quickshell, not Waybar.
