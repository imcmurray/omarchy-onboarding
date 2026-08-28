# Five Nights to Omarchy — live series

Five live evening episodes. Same time each night. About fifteen minutes of **spoken** teaching — not padded holds, not a man page, not a playlist you half-watch at 1.5× while cooking. YouTube premiere or live workshop. Chat on. Super plus K if anyone blanks, including the host.

## Suggested live-event framing

Pick one evening slot and keep it. Example: **7:00 p.m. America/Boise**, five consecutive weeknights. Schedule each night as a YouTube premiere (or a live workshop with the deck at `/day-N/`) so people can set a reminder. Title the events **Night N of 5**, not “episode dump.” Do not create calendar events from this file — this is the one-pager for a human to copy from.

- Cold open every night. Callbacks to the night before.
- Nights 1–4 close with **same time tomorrow** and a tease, not a thank-you.
- Night 5 is series close. Thank them **once**, on the closer, not in the title.
- Voice: ElevenLabs Eliza register — warm conversational American female, podcast host — even when Ian is in the room. Hotkeys spoken Super plus K.
- Manual: [omarchy.org/manual](https://omarchy.org/manual/). Discord: `#omarchy-help`.

## The five nights

| Night | Title | Logline | Spoken runtime (140 wpm) | Beats |
| --- | --- | --- | --- | --- |
| 1 | Intro | Adventure, not BIOS. Super, the menu, Super plus K, two windows. | 16:09 (2,260 words) | 16 |
| 2 | Navigation | The keyboard becomes the mouse. Dwindle, workspaces, scratchpad, pop, Super plus L. | 16:24 (2,296 words) | 16 |
| 3 | Work | The working desktop: Quickshell bar, Super plus C in the terminal, screenshots, a thirty-second recording. | 15:08 (2,119 words) | 13 |
| 4 | Make it yours | Themes first, then the files that are actually yours. Inkblade, Lua, never edit /usr/share/omarchy. | 15:12 (2,127 words) | 13 |
| 5 | Own it | CLI, agents, a theme of your own, snapshots, the encryption bargain. Series close. | 15:05 (2,112 words) | 12 |

### Night 1 — Intro
Five evenings to Omarchy. Not a distro war. Super is the Windows key. Super plus Space is the menu. Super plus K is the cheatsheet. Terminal plus browser tile. Homework: menu, two windows, cheatsheet. Tease: navigation.

### Night 2 — Navigation
On first boot you cannot do a thing with the mouse alone. Dwindle, Super plus J, Super plus arrow, workspaces 1–4, scratchpad, groups (don't live here), pop, tile/float/full, Super plus L. Translation table. Mouse-light homework. Tease: bar, clipboard, capture.

### Night 3 — Work
Quickshell draws the bar, menu, notifications, OSD, lock. Panels on Super plus Control plus A/W/B/D/P. Super plus C in the terminal. Print Screen and Alt plus Print Screen. Launchers vs dedicated keys. Apps survey, not a vim lesson. Tease: themes.

### Night 4 — Make it yours
Theme picker, twenty-two shipped, Inkblade as the worked example. ~/.config is yours; /usr/share/omarchy is the package. Setup menu. Lua family. shell.json. Updates snapshot first. Levers when you make a mess. Tease: own it.

### Night 5 — Own it
omarchy CLI. Agents and Herdr, none favorite. Make a theme. Tweaks. Breakage ladder. Snapshots restore /root not /home. Encryption bargain. Walk the four nights. Homework that lasts a month. Thank once. Now go make it yours.

## Accuracy

Taught from the live Quattro manual. Do not invent hotkeys. Lua configs. `/usr/share/omarchy` is the package — do not edit; override in `~/.config`. Default terminal is foot. Bar is Quickshell, not Waybar. Super plus Space = Omarchy menu; Super plus Alt plus Space = apps-only. Caps Lock is Compose (FAQ, not a bug). Say Super, not Cmd, unless translating.

Scripts: `scripts/day-1.md` … `scripts/day-5.md`. TTS packs: `auto/day-N/`.
