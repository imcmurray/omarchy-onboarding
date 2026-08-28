# Night 5 of 5 — Own it

**Live episode** (YouTube premiere / live workshop), not a man page.
**Spoken words:** 2,112. **Clock at 140 wpm:** 15:05.

Voice: ElevenLabs Eliza — warm conversational American female, podcast host. Funny when it earns it. Direct address. Hotkeys in speak text as Super plus K, never Super+K. No stage directions inside You say.

*Presenter: Thank them once on the closer, not the title. No same-time-tomorrow.*

| Beat | Title | Clock | Words | Seconds |
| --- | --- | --- | --- | --- |
| 1 | Title | 0:00–1:03 | 147 | 63 |
| 2 | omarchy CLI | 1:03–2:32 | 207 | 89 |
| 3 | AI + Herdr | 2:32–3:57 | 198 | 85 |
| 4 | Make a theme | 3:57–5:11 | 172 | 74 |
| 5 | Tweaks | 5:11–6:22 | 165 | 71 |
| 6 | Breakage | 6:22–7:42 | 186 | 80 |
| 7 | Snapshots | 7:42–8:54 | 167 | 72 |
| 8 | Encryption | 8:54–10:09 | 174 | 75 |
| 9 | Five evenings | 10:09–11:39 | 209 | 90 |
| 10 | Homework | 11:39–12:59 | 186 | 80 |
| 11 | Super+K + manual | 12:59–14:11 | 169 | 72 |
| 12 | Closer | 14:11–15:08 | 132 | 57 |

---

## 1. Title
**Clock:** 0:00–1:03 · **147 words · 63s**

*[stage] Last episode. Cold open. More altitude, still warm. Do not thank them on the title — that is the closer.*

### You say

Night 5 of 5. Own it. Fifteen minutes. Live. Last one of the week. Same chair as Night 1, except now you can Super plus arrow without looking, or you are about to, and either is fine.

If you did last night's homework, the machine looks like a decision, and you changed one official file via Setup, and ~/.config is no longer a rumor. If you did not, you can still follow. Tonight is permission, not a quiz. Bring the theme you can stand. Bring the gap you changed. If you brought neither, stay anyway.

Four nights behind us. Super. Move. Work. Make it yours. Tonight: the omarchy CLI, agents, a theme of your own, and the safety net under the floor. Snapshots. Encryption. The FAQ where Caps Lock is Compose.

I am not thanking you yet. We have work. Same Super key. Let's own the machine.

## 2. omarchy CLI
**Clock:** 1:03–2:32 · **207 words · 89s**

*[stage] Type omarchy if you can. theme set, pkg add, update, --help. How agents customize with you.*

### You say

Open a terminal. Super plus Return. Type omarchy. Then tab.

That is the command center. omarchy theme set, then a name — inkblade, or whatever you installed last night. omarchy pkg add, then a package, which is last night's Install, Package, as a sentence. omarchy update, which is Update, Omarchy, which snapshots first. You already know those jobs from the menu. The CLI is the same jobs, scriptable.

Every group takes dash dash help. omarchy theme dash dash help. omarchy pkg dash dash help. You do not memorize a man page. You ask the command.

This is how an AI agent customizes the machine with you instead of guessing at files. You do not want a model inventing a path in /usr/share/omarchy. You want it to say omarchy theme set, omarchy pkg add, omarchy bar position bottom. The CLI is the contract. The menu is how you discovered it. Agents drive the contract.

If you only learn one habit tonight besides Super plus K, learn: type omarchy, then help. The rest of ownership is downstream from that prompt. Menu for discovery. CLI for speed, and for the agent sitting next to you. Same lesson as Super plus Space versus Super plus Return, now at the system layer.

## 3. AI + Herdr
**Clock:** 2:32–3:57 · **198 words · 85s**

*[stage] Agents first-class, none favorite. Stubs ~/.local/bin. Setup → Defaults → Agent. Super+Shift+Ctrl+A launches. Super+Ctrl+Return Herdr. Super+Ctrl+K Herdr keys. Omarchy skill experimental, plan mode first.*

### You say

Agents are first-class, and none is the favorite. That is the point of omakase with an asterisk: the chef cooked a kitchen that can host more than one cook.

Stubs live in ~/.local/bin. Nothing downloads until you run it. Setup, Defaults, Agent — pick the default. Super plus Shift plus Control plus A launches it. a on the command line is the default. Other stubs exist for other names. You do not owe anyone a brand.

Super plus Control plus Return is Herdr, a persistent terminal workspace. Think of it as a place an agent can keep living while you Super plus 1 through 4 around the rest of the machine. Super plus Control plus K is Herdr's keys. Night 1 I told you to ignore that. Tonight you may stop ignoring it, if you actually open Herdr. If you do not, leave it. Super plus K is still the human cheatsheet.

The Omarchy skill can edit configs for you. Treat it as experimental. Plan mode first. Read the plan. Then let it touch ~/.config. If it makes a mess, omarchy reinstall configs — last night's broom. Agents are power tools. They are not the owner. You are.

## 4. Make a theme
**Clock:** 3:57–5:11 · **172 words · 74s**

*[stage] Copy /usr/share/omarchy/themes → ~/.config/omarchy/themes, edit colors.toml. Or Aether from apps menu Super+Alt+Space. Ship as omarchy-yourname-theme.*

### You say

A theme of your own. Two doors.

Door one: copy a theme from /usr/share/omarchy/themes into ~/.config/omarchy/themes. Notice the copy. You did not edit the package. You overrode. Then edit colors.toml. That is the palette everything is generated from. Change an accent. Save. Super plus Control plus Shift plus Space and pick your folder. You just made a theme.

Door two: open Aether from the apps menu. Super plus Alt plus Space, apps-only, from Night 1. Paint. Aether is the GUI door. colors.toml is the file door. Same house.

To give it away: a public repo named omarchy-yourname-theme — last night's naming convention — then omarchy theme install that URL. Git themes keep colours and drop code, which you already know, which is why shipping one is safe.

Homework will ask for a tiny Inkblade fork or a second extra theme. Changing an accent in colors.toml counts. I am not asking you to become a designer in an evening. I am asking you to touch the palette so the machine has your fingerprint.

## 5. Tweaks
**Clock:** 5:11–6:22 · **165 words · 71s**

*[stage] Gaps/rounding looknfeel.lua. Bar position. Super+Shift+Space hide. Common tweaks chapter. Updates may park colliding edit in .bak.*

### You say

Small, legal tweaks. The Common tweaks chapter in the manual is a menu, not a dare.

Gaps and rounding live in looknfeel.lua. If you did last night's homework, you were already in that file. If you did not, Setup, Config, looknfeel. Change a gap. Feel dwindle breathe. Night 2's cramped feeling had a number.

Bar position: drag it, or omarchy bar position bottom. Super plus Shift plus Space still hides it — Night 3. shell.json becomes canonical when you drag a widget. omarchy bar defaults if you want the new widgets back. You heard that yesterday. It is still true.

Updates may park a colliding edit in a .bak if they have to restore a file. That is the polite version of last night's scalpel. Look for the backup before you panic. ~/.config is yours, including the fossils.

Do not improvise unlisted hotkeys. Super plus K is the list. The manual is the book. If a blog invents a chord, the blog can keep it.

## 6. Breakage
**Clock:** 6:22–7:42 · **186 words · 80s**

*[stage] #omarchy-help, then omarchy debug. Boot snapshot. reinstall configs. Caps Lock is Compose, FAQ not a bug.*

### You say

When it breaks — and tiling, theming, living on Lua, it will, once — the ladder is short.

Discord, channel omarchy-help. Then omarchy debug. Share that output, not a vibe. Not it-feels-weird. The debug dump. People who can help you need the dump.

Boot a snapshot from Limine if the update is the crime. We will say /root not /home in a minute. omarchy reinstall configs if the files are the mess. One file via Update, Config if you know which file. Big red lever last, and you still say it out loud.

Caps Lock is Compose, not caps. That is a FAQ, not a bug. You will hit Caps Lock to yell at the machine and get a compose key, and you will think Hyprland is possessed. It is not. It is Compose. Look it up in the manual, then decide whether to keep it. I am telling you now so Night 5 saves you a thread.

Do not live-debug someone else's laptop in the chat. Point them at omarchy-help. That is the official backstop. I promised it on Night 1. Here it is again.

## 7. Snapshots
**Clock:** 7:42–8:54 · **167 words · 72s**

*[stage] Every update snapshots. omarchy-snapshot create. Limine restore /root not /home. ~/.config survives.*

### You say

Every Omarchy update snapshots first. You heard that last night. Here is the mental model.

omarchy-snapshot create when you want your own, before you pull a lever, before you let an agent cook, before you install the theme you wrote in twenty minutes. Restore from Limine. It rolls back /root, not /home.

That split is the whole lecture. /root is the system. /home is you. A snapshot will not save the essay you did not commit. It will not save the screenshot on the clipboard. It will put the packages back. ~/.config survives, which is great until a library's format moved and your override is now a museum piece. Then you use the .bak, or reinstall configs, or diff like an adult.

This is not Time Machine. Do not treat it as Time Machine. Treat it as a boot-menu undo for the operating system, with your home directory still sitting there looking at you. If that scares you, good. Commit your work. Snapshot before you get clever.

## 8. Encryption
**Clock:** 8:54–10:09 · **174 words · 75s**

*[stage] LUKS at boot, auto-login the door. Bluetooth keyboard can't unlock. Firewall on. Installer Ctrl+C on disk confirm is for throwaways.*

### You say

This is the bargain. LUKS at boot is the lock. Auto-login is the door. You decrypt the disk, then the session starts without a second password. That is why a Bluetooth keyboard cannot unlock the machine — same as a BIOS, same as Night 1's install gotcha. Wired, or 2.4 gigahertz, until the disk is open. Then pair whatever you want.

Firewall on. Incoming closed except SSH and LocalSend. Super plus Control plus S from Night 3 still sends a file across the room. The rest of the internet can wait outside.

If the machine can be lost — laptop, travel, a bag — encrypt. If it is a throwaway lab box, the installer's Control plus C on disk confirm is how you skip the lock on purpose. That chord is for throwaways. It is not the default lifestyle.

I am not fearmongering. I am telling you the model so the Bluetooth keyboard at the LUKS prompt stops feeling like a bug. It is the lock. Auto-login is the door. You already live inside.

## 9. Five evenings
**Clock:** 10:09–11:39 · **209 words · 90s**

*[stage] Walk the four nights. Let it breathe. Day 5 is the permission slip. No thank-you yet.*

### You say

Walk with me. Four nights, then this one. Let it breathe. This is the recap that is allowed to feel like a recap.

Night 1. Super is the Windows key. Super plus Space, the Omarchy menu. Super plus K, the only hotkey you have to memorize. Super plus Return, Super plus Shift plus Return. Terminal, browser, they tile. Close means quit. Adventure, not a BIOS screen. A beautiful system is a motivating system. Productivity is downstream.

Night 2. On first boot you cannot do a thing with the mouse alone. Dwindle. Super plus J. Super plus arrow, cursor to the center. Super plus 1 through 4. Scratchpad, Super plus S or Super plus Grave — grave, the backtick. Pop. Super plus L. Mouse-light, not mouse-shame.

Night 3. Quickshell draws the bar, the menu, the notifications, the lock. Super plus C in the terminal. Print Screen. Alt plus Print Screen. You worked.

Night 4. Theme picker. Inkblade. ~/.config is yours. /usr/share/omarchy is the package. Lua. Setup. You made it look like you.

Night 5 is the permission slip. You have a beautiful Linux. CLI, agents, a theme of your own, snapshots, the bargain. You do not need another fifteen to start. You needed five evenings to stop waiting for permission.

## 10. Homework
**Clock:** 11:39–12:59 · **186 words · 80s**

*[stage] One tweak you'll still want in a month. Second extra theme or tiny Inkblade fork — change accent in colors.toml.*

### You say

Homework. Keep going. There is no Night 6 on this stream, so this one has to last. Same energy as the mouse-light day, except now the assignment is identity.

One tweak in ~/.config you will still want in a month. Not a souvenir. A gap, a binding, a bar on the bottom, a layout default in looknfeel.lua. Something your hands will miss if it vanished. Do it through Setup so you remember the door. Super plus Space, type setup. Official path. Then live with the change for a week.

And a second extra theme — or a tiny fork of Inkblade. Copy it from /usr/share/omarchy/themes into ~/.config/omarchy/themes. Change the accent in colors.toml. That is a theme. omarchy-yourname-theme if you ship it. You do not have to ship it. You have to touch the palette so the fingerprint is yours.

If both of those sound like a weekend, good. Fifteen minutes a night was the on-ramp. The machine is the rest of the week. Super plus K when you blank. omarchy dash dash help when the agent should be driving a command instead of a mystery file.

## 11. Super+K + manual
**Clock:** 12:59–14:11 · **169 words · 72s**

*[stage] Don't memorize the rest. Super+K, then the manual. Three URLs.*

### You say

Do not memorize the rest. I mean that as kindness, not a cop-out. Five evenings was never going to be the whole language. It was going to be enough language to stop being afraid of the empty desktop.

Super plus K, then the manual. omarchy.org/manual. Discord, channel omarchy-help. omarchy.org/themes.

The cheatsheet is the live machine. The manual is the live book. The Discord is the live backstop. The extra shelf is if twenty-two plus Inkblade plus your fork is still not enough.

Every chord I skipped on purpose lives in those three. Every chord I would have invented if I were sloppy does not. If Super plus K and the manual disagree with a slide from Monday, the machine and the manual win. Patch the slide. Do not argue with a compositor on camera.

You have the vocabulary. Super. Menu. Cheatsheet. Move. Work. Theme. Config. CLI. Snapshot. You do not have the whole language. Nobody does, not even the chef, not on a Tuesday. Look it up. Then go.

## 12. Closer
**Clock:** 14:11–15:08 · **132 words · 57s**

*[stage] omarchy.org/manual. Now go make it yours. Hold. Thank them once. Stop. No same-time-tomorrow.*

### You say

omarchy.org/manual. Now go make it yours.

Thank you for five evenings. For doing the mouse-light day. For pasting out of the terminal. For changing a gap. For showing up live at the same time each night, or for pretending the recording was live, which I will allow. You did not come for a distro war. You came for an adventure into a new way of working, and you sat through the dwindle, and that counts.

This was Night 5 of 5. The series is closed. The machine is not. Super plus K when you blank. Channel omarchy-help when you are stuck. ~/.config when you want it to look like you. Type omarchy, then help, when an agent should be driving a command instead of a mystery path.

Now go make it yours.

---

**Don't invent hotkeys.** Super plus Grave: say “grave, the backtick.” Thank them once on the closer, not the title. No same-time-tomorrow.
