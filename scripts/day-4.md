# Day 4 — Make it yours
**Runtime ~15:00.** Open `/day-4/`. Have the Inkblade URL on the clipboard so the install is one paste.

| # | Slide | Clock | You say |
| --- | --- | --- | --- |
| 1 | Title | 0:00–0:30 | “Day four. Make it yours. Themes first, then the files that are actually yours.” |
| 2 | Picker | 0:30–1:40 | Super+Ctrl+Shift+Space. “Twenty-two shipped themes. The whole shell follows: terminal, Neovim, Chromium, bar, lock. Super+Ctrl+Space pages that theme’s backgrounds. Obsidian needs the Omarchy theme picked inside the app, once.” |
| 3 | Install Inkblade | 1:40–3:20 | Paste and run, or Install → Style → Theme. `omarchy theme install https://github.com/imcmurray/omarchy-inkblade-theme` “Naming convention omarchy-name-theme is why it shows up as Inkblade. A theme you install from git keeps colours and drops anything that would run code — lua, terminal configs, vscode.json. That’s deliberate. Then pick a background.” |
| 4 | ~/.config vs /usr/share/omarchy | 3:20–4:20 | “~/.config is yours. /usr/share/omarchy is the pacman package. If you edit the share tree, the next update puts it back. Override in ~/.config. The old ~/.local/share/omarchy path is stale.” |
| 5 | Setup menu | 4:20–5:20 | Super+Space, type setup. “Monitors, keybindings, input, Config → the file. Quit the editor and Omarchy restarts what must restart. This is System Settings, except the setting is a file you can diff.” |
| 6 | hyprland.lua family | 5:20–7:10 | “Quattro is Lua, not the old .conf. hyprland.lua loads the defaults plus your overrides. bindings.lua is keys you add or unbind. monitors.lua is displays. looknfeel.lua is gaps, borders, the default layout. input.lua is the keyboard and the trackpad.” |
| 7 | shell.json | 7:10–8:20 | “The bar lives in ~/.config/omarchy/shell.json — the moment you drag a widget, that file becomes canonical. New default widgets won’t appear until `omarchy bar defaults`. You can also `omarchy bar position bottom`. Idle timings are in the same file.” |
| 8 | Updates | 8:20–9:50 | “Update → Omarchy. Badge by the clock. It snapshots first. Don’t freelance pacman -Syu — Omarchy will stop you. Channels: stable, RC, edge, dev. Broken after an update? Reboot, pick the snapshot in Limine. That restores /root, not /home.” |
| 9 | Mess | 9:50–10:40 | “Update → Config resets one file. `omarchy reinstall configs` resets all of them. `omarchy reinstall` is the big red lever and it will overwrite your tweaks. Say that out loud before you pull it.” |
| 10 | Recap | 10:40–11:25 | Theme chord, background chord. “Style is a hotkey. Config is a folder. Leave /usr/share/omarchy alone.” |
| 11 | Homework | 11:25–12:50 | “Switch theme — Inkblade, or anything that makes you stay. Then one official config edit via Setup. Gaps in looknfeel, or a single binding. Save. Come back.” |
| 12 | Tomorrow | 12:50–13:30 | “Day five: own the machine. The omarchy CLI, AI and Herdr, making a theme, snapshots, the encryption bargain.” |
| 13 | Manual | 13:30–15:00 | URL. omarchy.org/themes for the extra shelf. Hold. Stop. |

**If the install hangs:** talk through the URL and move on; don’t debug git on camera.
