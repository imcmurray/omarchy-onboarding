# Recording Day 1

Ian records this first. Target: one clean 15-minute take at **1920×1080**.

## Before you sit down

1. Clone or pull `omarchy-onboarding`. From the site root:

   ```bash
   python3 -m http.server 8080
   ```

2. Open Chromium (or the Omarchy browser) to `http://localhost:8080/day-1/`.
3. Second monitor or a window on the side: hit **S** (or **P**) for presenter notes. That window is current slide + next + notes + elapsed timer. **Do not capture it.**
4. Optional: open the timed script `scripts/day-1.md` on a phone or that same notes display.

## Hide everything that isn’t the deck

- **F11** — browser fullscreen. (Deck **F** fullscreens only the 16:9 stage; F11 is simpler on camera.)
- Hide bookmarks bar, the tab strip if you can (most browsers: F11 is enough).
- Super+Shift+Space hides the Omarchy bar if it’s in the shot.
- Don’t open the presenter window on the captured display.
- Mouse: click advances; prefer the keyboard so the cursor isn’t wandering. Park the pointer in a corner.
- Disable notifications: Super+Ctrl+comma (Do Not Disturb) before you roll.

## OBS (stock Omarchy)

1. Super+Space, type `OBS`, Return.
2. Canvas **1920×1080**, 60 fps if the machine is happy, 30 if not.
3. Source: **Screen Capture (PipeWire)** of the browser monitor, or a Window capture of Chromium — window capture avoids a stray overlay.
4. Mic: talk in the room voice, not a radio voice. Inkblade is quiet; you don’t have to shout over it.
5. Hit Alt+Print Screen if you’d rather use Omarchy’s recorder for a backup take (it will ask which audio). OBS is the A-roll.

## Keys while presenting

| Key | What |
| --- | --- |
| Space / Right / Enter | Next |
| Left / Backspace | Previous |
| Home | Title card |
| End | Manual closer |
| F | Stage fullscreen |
| S or P | Notes window |
| Esc | Leave fullscreen |

If you blank: Super+K is the lesson. Don’t narrate a recovery unless it’s charming.

## Suggested YouTube — Day 1

**Title**

```
Five Days to Omarchy — Day 1: Super, the menu, and two windows
```

**Description**

```
Day 1 of 5. Omarchy is omakase Linux (Arch + Hyprland + Quickshell). This episode is the adventure, not the BIOS: what it is, why it isn’t trying to be Mac or Windows, and the four keys that unlock the machine.

  Super            Windows key (Cmd on Mac hardware)
  Super+Space      Omarchy menu (Spotlight / Start)
  Super+K          Every hotkey
  Super+Return     Terminal
  Super+Shift+Return  Browser

Homework: menu, terminal then browser, Super+K.

Manual: https://omarchy.org/manual/
Discord: #omarchy-help
Slides: https://github.com/imcmurray/omarchy-onboarding

Series
  Day 1  Intro
  Day 2  Navigation
  Day 3  Work
  Day 4  Make it yours
  Day 5  Own it
```

**Tags**

`omarchy`, `hyprland`, `arch linux`, `linux desktop`, `dhh`, `tiling window manager`, `onboarding`

**End screen**

Hold the last slide (`omarchy.org/manual`) for 3–4 seconds. Don’t talk over it.

## After the take

- If a hotkey on a slide disagrees with Super+K on a current machine, the machine and the [Quattro manual](https://omarchy.org/manual/) win — patch the HTML, don’t argue on camera.
- Days 2–5 wait. Ship Day 1.
