# Day 5 — Own it
**Runtime ~15:00.** Open `/day-5/`. Last episode. More altitude, still sparse. Thank them on the closer, not on the title.

| # | Slide | Clock | You say |
| --- | --- | --- | --- |
| 1 | Title | 0:00–0:30 | “Day five. Own it. The CLI, agents, a theme of your own, and the safety net under the floor.” |
| 2 | omarchy CLI | 0:30–2:00 | Type `omarchy` if you can. “Command center. `omarchy theme set`, `omarchy pkg add`, `omarchy update`. Every group takes --help. This is how an AI agent customizes the machine with you instead of guessing at files.” |
| 3 | AI + Herdr | 2:00–3:40 | “Agents are first-class and none is the favorite. Stubs in ~/.local/bin — nothing downloads until you run it. Setup → Defaults → Agent. Super+Shift+Ctrl+A launches it. Super+Ctrl+Return is Herdr, a persistent terminal workspace; Super+Ctrl+K for its keys. The Omarchy skill can edit configs for you. Treat it as experimental. Plan mode first. `omarchy reinstall configs` if it makes a mess.” |
| 4 | Make a theme | 3:40–5:10 | “Copy a theme from /usr/share/omarchy/themes into ~/.config/omarchy/themes. Edit colors.toml. Or open Aether from the apps menu — Super+Alt+Space. To give it away: a public repo named omarchy-yourname-theme, then `omarchy theme install` that URL.” |
| 5 | Tweaks | 5:10–6:10 | “Gaps and rounding in looknfeel.lua. Drag the bar, or `omarchy bar position bottom`. Super+Shift+Space hides it. The Common tweaks chapter is a menu, not a dare. Updates may park a colliding edit in a .bak.” |
| 6 | Breakage | 6:10–7:20 | “#omarchy-help, then `omarchy debug` — share that, not a vibe. Boot a snapshot. `omarchy reinstall configs` if the files are the mess. Caps Lock is Compose, not caps; that’s a FAQ, not a bug.” |
| 7 | Snapshots | 7:20–8:40 | “Every Omarchy update snapshots first. `omarchy-snapshot create` when you want your own. Restore from Limine. It rolls back /root, not /home, so it will not save the essay you didn’t commit. ~/.config survives, which is great until a library’s format moved.” |
| 8 | Encryption | 8:40–10:00 | “This is the bargain. LUKS at boot is the lock. Auto-login is the door. That’s why a Bluetooth keyboard can’t unlock the disk. Firewall on; incoming closed except SSH and LocalSend. If the machine can be lost, encrypt. The installer’s Ctrl+C on disk confirm is for throwaways.” |
| 9 | Five evenings | 10:00–11:20 | Walk the four days. Let it breathe. “You have a beautiful Linux. Day five is the permission slip.” |
| 10 | Homework | 11:20–12:30 | “One tweak in ~/.config you’ll still want in a month. And either a second extra theme, or a tiny fork of Inkblade — change the accent in colors.toml. That’s a theme.” |
| 11 | Super+K + manual | 12:30–13:40 | “Don’t memorize the rest. Super+K, then the manual. omarchy.org/manual. Discord #omarchy-help. omarchy.org/themes.” |
| 12 | Closer | 13:40–15:00 | “omarchy.org/manual. Now go make it yours.” Hold. Thank them once. Stop. |

**If over:** skip tweaks, keep encryption.
**Don’t:** live-debug someone’s laptop in the comments. Point at #omarchy-help.
