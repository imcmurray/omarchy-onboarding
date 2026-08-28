# Night 5 — narration

TTS paste pack. Spoken prose only — no stage directions. One section per beat. Split a beat if it exceeds 4000 characters (none do). Source: `scripts/day-5.md` You say. Spoken words: 2,112. Clock at 140 wpm: 15:05. Do not pad silence.

## 1. Title

_63s · 147 words_

Night 5 of 5. Own it. Fifteen minutes. Live. Last one of the week. Same chair as Night 1, except now you can Super plus arrow without looking, or you are about to, and either is fine.

If you did last night's homework, the machine looks like a decision, and you changed one official file via Setup, and ~/.config is no longer a rumor. If you did not, you can still follow. Tonight is permission, not a quiz. Bring the theme you can stand. Bring the gap you changed. If you brought neither, stay anyway.

Four nights behind us. Super. Move. Work. Make it yours. Tonight: the omarchy CLI, agents, a theme of your own, and the safety net under the floor. Snapshots. Encryption. The FAQ where Caps Lock is Compose.

I am not thanking you yet. We have work. Same Super key. Let's own the machine.

## 2. omarchy CLI

_89s · 207 words_

Open a terminal. Super plus Return. Type omarchy. Then tab.

That is the command center. omarchy theme set, then a name — inkblade, or whatever you installed last night. omarchy pkg add, then a package, which is last night's Install, Package, as a sentence. omarchy update, which is Update, Omarchy, which snapshots first. You already know those jobs from the menu. The CLI is the same jobs, scriptable.

Every group takes dash dash help. omarchy theme dash dash help. omarchy pkg dash dash help. You do not memorize a man page. You ask the command.

This is how an AI agent customizes the machine with you instead of guessing at files. You do not want a model inventing a path in /usr/share/omarchy. You want it to say omarchy theme set, omarchy pkg add, omarchy bar position bottom. The CLI is the contract. The menu is how you discovered it. Agents drive the contract.

If you only learn one habit tonight besides Super plus K, learn: type omarchy, then help. The rest of ownership is downstream from that prompt. Menu for discovery. CLI for speed, and for the agent sitting next to you. Same lesson as Super plus Space versus Super plus Return, now at the system layer.

## 3. AI + Herdr

_85s · 198 words_

Agents are first-class, and none is the favorite. That is the point of omakase with an asterisk: the chef cooked a kitchen that can host more than one cook.

Stubs live in ~/.local/bin. Nothing downloads until you run it. Setup, Defaults, Agent — pick the default. Super plus Shift plus Control plus A launches it. a on the command line is the default. Other stubs exist for other names. You do not owe anyone a brand.

Super plus Control plus Return is Herdr, a persistent terminal workspace. Think of it as a place an agent can keep living while you Super plus 1 through 4 around the rest of the machine. Super plus Control plus K is Herdr's keys. Night 1 I told you to ignore that. Tonight you may stop ignoring it, if you actually open Herdr. If you do not, leave it. Super plus K is still the human cheatsheet.

The Omarchy skill can edit configs for you. Treat it as experimental. Plan mode first. Read the plan. Then let it touch ~/.config. If it makes a mess, omarchy reinstall configs — last night's broom. Agents are power tools. They are not the owner. You are.

## 4. Make a theme

_74s · 172 words_

A theme of your own. Two doors.

Door one: copy a theme from /usr/share/omarchy/themes into ~/.config/omarchy/themes. Notice the copy. You did not edit the package. You overrode. Then edit colors.toml. That is the palette everything is generated from. Change an accent. Save. Super plus Control plus Shift plus Space and pick your folder. You just made a theme.

Door two: open Aether from the apps menu. Super plus Alt plus Space, apps-only, from Night 1. Paint. Aether is the GUI door. colors.toml is the file door. Same house.

To give it away: a public repo named omarchy-yourname-theme — last night's naming convention — then omarchy theme install that URL. Git themes keep colours and drop code, which you already know, which is why shipping one is safe.

Homework will ask for a tiny Inkblade fork or a second extra theme. Changing an accent in colors.toml counts. I am not asking you to become a designer in an evening. I am asking you to touch the palette so the machine has your fingerprint.

## 5. Tweaks

_71s · 165 words_

Small, legal tweaks. The Common tweaks chapter in the manual is a menu, not a dare.

Gaps and rounding live in looknfeel.lua. If you did last night's homework, you were already in that file. If you did not, Setup, Config, looknfeel. Change a gap. Feel dwindle breathe. Night 2's cramped feeling had a number.

Bar position: drag it, or omarchy bar position bottom. Super plus Shift plus Space still hides it — Night 3. shell.json becomes canonical when you drag a widget. omarchy bar defaults if you want the new widgets back. You heard that yesterday. It is still true.

Updates may park a colliding edit in a .bak if they have to restore a file. That is the polite version of last night's scalpel. Look for the backup before you panic. ~/.config is yours, including the fossils.

Do not improvise unlisted hotkeys. Super plus K is the list. The manual is the book. If a blog invents a chord, the blog can keep it.

## 6. Breakage

_80s · 186 words_

When it breaks — and tiling, theming, living on Lua, it will, once — the ladder is short.

Discord, channel omarchy-help. Then omarchy debug. Share that output, not a vibe. Not it-feels-weird. The debug dump. People who can help you need the dump.

Boot a snapshot from Limine if the update is the crime. We will say /root not /home in a minute. omarchy reinstall configs if the files are the mess. One file via Update, Config if you know which file. Big red lever last, and you still say it out loud.

Caps Lock is Compose, not caps. That is a FAQ, not a bug. You will hit Caps Lock to yell at the machine and get a compose key, and you will think Hyprland is possessed. It is not. It is Compose. Look it up in the manual, then decide whether to keep it. I am telling you now so Night 5 saves you a thread.

Do not live-debug someone else's laptop in the chat. Point them at omarchy-help. That is the official backstop. I promised it on Night 1. Here it is again.

## 7. Snapshots

_72s · 167 words_

Every Omarchy update snapshots first. You heard that last night. Here is the mental model.

omarchy-snapshot create when you want your own, before you pull a lever, before you let an agent cook, before you install the theme you wrote in twenty minutes. Restore from Limine. It rolls back /root, not /home.

That split is the whole lecture. /root is the system. /home is you. A snapshot will not save the essay you did not commit. It will not save the screenshot on the clipboard. It will put the packages back. ~/.config survives, which is great until a library's format moved and your override is now a museum piece. Then you use the .bak, or reinstall configs, or diff like an adult.

This is not Time Machine. Do not treat it as Time Machine. Treat it as a boot-menu undo for the operating system, with your home directory still sitting there looking at you. If that scares you, good. Commit your work. Snapshot before you get clever.

## 8. Encryption

_75s · 174 words_

This is the bargain. LUKS at boot is the lock. Auto-login is the door. You decrypt the disk, then the session starts without a second password. That is why a Bluetooth keyboard cannot unlock the machine — same as a BIOS, same as Night 1's install gotcha. Wired, or 2.4 gigahertz, until the disk is open. Then pair whatever you want.

Firewall on. Incoming closed except SSH and LocalSend. Super plus Control plus S from Night 3 still sends a file across the room. The rest of the internet can wait outside.

If the machine can be lost — laptop, travel, a bag — encrypt. If it is a throwaway lab box, the installer's Control plus C on disk confirm is how you skip the lock on purpose. That chord is for throwaways. It is not the default lifestyle.

I am not fearmongering. I am telling you the model so the Bluetooth keyboard at the LUKS prompt stops feeling like a bug. It is the lock. Auto-login is the door. You already live inside.

## 9. Five evenings

_90s · 209 words_

Walk with me. Four nights, then this one. Let it breathe. This is the recap that is allowed to feel like a recap.

Night 1. Super is the Windows key. Super plus Space, the Omarchy menu. Super plus K, the only hotkey you have to memorize. Super plus Return, Super plus Shift plus Return. Terminal, browser, they tile. Close means quit. Adventure, not a BIOS screen. A beautiful system is a motivating system. Productivity is downstream.

Night 2. On first boot you cannot do a thing with the mouse alone. Dwindle. Super plus J. Super plus arrow, cursor to the center. Super plus 1 through 4. Scratchpad, Super plus S or Super plus Grave — grave, the backtick. Pop. Super plus L. Mouse-light, not mouse-shame.

Night 3. Quickshell draws the bar, the menu, the notifications, the lock. Super plus C in the terminal. Print Screen. Alt plus Print Screen. You worked.

Night 4. Theme picker. Inkblade. ~/.config is yours. /usr/share/omarchy is the package. Lua. Setup. You made it look like you.

Night 5 is the permission slip. You have a beautiful Linux. CLI, agents, a theme of your own, snapshots, the bargain. You do not need another fifteen to start. You needed five evenings to stop waiting for permission.

## 10. Homework

_80s · 186 words_

Homework. Keep going. There is no Night 6 on this stream, so this one has to last. Same energy as the mouse-light day, except now the assignment is identity.

One tweak in ~/.config you will still want in a month. Not a souvenir. A gap, a binding, a bar on the bottom, a layout default in looknfeel.lua. Something your hands will miss if it vanished. Do it through Setup so you remember the door. Super plus Space, type setup. Official path. Then live with the change for a week.

And a second extra theme — or a tiny fork of Inkblade. Copy it from /usr/share/omarchy/themes into ~/.config/omarchy/themes. Change the accent in colors.toml. That is a theme. omarchy-yourname-theme if you ship it. You do not have to ship it. You have to touch the palette so the fingerprint is yours.

If both of those sound like a weekend, good. Fifteen minutes a night was the on-ramp. The machine is the rest of the week. Super plus K when you blank. omarchy dash dash help when the agent should be driving a command instead of a mystery file.

## 11. Super+K + manual

_72s · 169 words_

Do not memorize the rest. I mean that as kindness, not a cop-out. Five evenings was never going to be the whole language. It was going to be enough language to stop being afraid of the empty desktop.

Super plus K, then the manual. omarchy.org/manual. Discord, channel omarchy-help. omarchy.org/themes.

The cheatsheet is the live machine. The manual is the live book. The Discord is the live backstop. The extra shelf is if twenty-two plus Inkblade plus your fork is still not enough.

Every chord I skipped on purpose lives in those three. Every chord I would have invented if I were sloppy does not. If Super plus K and the manual disagree with a slide from Monday, the machine and the manual win. Patch the slide. Do not argue with a compositor on camera.

You have the vocabulary. Super. Menu. Cheatsheet. Move. Work. Theme. Config. CLI. Snapshot. You do not have the whole language. Nobody does, not even the chef, not on a Tuesday. Look it up. Then go.

## 12. Closer

_57s · 132 words_

omarchy.org/manual. Now go make it yours.

Thank you for five evenings. For doing the mouse-light day. For pasting out of the terminal. For changing a gap. For showing up live at the same time each night, or for pretending the recording was live, which I will allow. You did not come for a distro war. You came for an adventure into a new way of working, and you sat through the dwindle, and that counts.

This was Night 5 of 5. The series is closed. The machine is not. Super plus K when you blank. Channel omarchy-help when you are stuck. ~/.config when you want it to look like you. Type omarchy, then help, when an agent should be driving a command instead of a mystery path.

Now go make it yours.
