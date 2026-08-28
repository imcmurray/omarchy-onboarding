# Night 4 of 5 — Make it yours

**Live episode** (YouTube premiere / live workshop), not a man page.
**Spoken words:** 2,127. **Clock at 140 wpm:** 15:12.

Voice: ElevenLabs Eliza — warm conversational American female, podcast host. Funny when it earns it. Direct address. Hotkeys in speak text as Super plus K, never Super+K. No stage directions inside You say.

*Presenter: Same time tomorrow. Series close tomorrow. Do not thank them yet.*

| Beat | Title | Clock | Words | Seconds |
| --- | --- | --- | --- | --- |
| 1 | Title | 0:00–1:01 | 142 | 61 |
| 2 | Picker | 1:01–2:19 | 182 | 78 |
| 3 | Install Inkblade | 2:19–3:38 | 185 | 79 |
| 4 | ~/.config vs /usr/share/omarchy | 3:38–4:51 | 170 | 73 |
| 5 | Setup menu | 4:51–6:08 | 179 | 77 |
| 6 | hyprland.lua family | 6:08–7:29 | 189 | 81 |
| 7 | shell.json | 7:29–8:42 | 170 | 73 |
| 8 | Updates | 8:42–10:02 | 186 | 80 |
| 9 | Mess | 10:02–11:12 | 163 | 70 |
| 10 | Recap | 11:12–12:19 | 156 | 67 |
| 11 | Homework | 12:19–13:27 | 158 | 68 |
| 12 | Tomorrow | 13:27–14:19 | 122 | 52 |
| 13 | Manual | 14:19–15:13 | 125 | 54 |

---

## 1. Title
**Clock:** 0:00–1:01 · **142 words · 61s**

*[stage] Cold open. Identity episode. Inkblade is the worked example. Callback to Night 3 homework. Do not thank them.*

### You say

Welcome back. Night 4 of 5. Fifteen minutes. Live. Last night you pasted a screenshot with Super plus V like a person who lives here, and you copied out of the terminal with Super plus C, and Linux folklore lost a round. If you skipped that homework, do it after this. Tonight we paint.

Night 1 was Super, the menu, two windows. Night 2 the keyboard became the mouse. Night 3 the bar, the clipboard, capture. Tonight: make it yours. Themes first, then the files that are actually yours. This is the identity episode. The machine should look like a decision, not a default.

If you have been staring at the shipped theme thinking it is pretty but it is not you — good. Stay with that itch. Same Super key. Same time as the last three nights. Let's steal the wallpaper.

## 2. Picker
**Clock:** 1:01–2:19 · **182 words · 78s**

*[stage] Super+Ctrl+Shift+Space. 22 shipped. Whole shell follows. Super+Ctrl+Space pages backgrounds. Obsidian needs Omarchy theme inside the app once.*

### You say

Super plus Control plus Shift plus Space. That is the theme picker. Twenty-two themes ship with the machine. Pick one. The whole shell follows. Terminal, Neovim, Chromium, the bar, the lock screen, the notifications you dismissed last night with Super plus comma. Quickshell is one process. That is why it themes as one piece. I told you that yesterday as a promise. Tonight is the delivery.

Super plus Control plus Space pages that theme's backgrounds. Same family of chords, one modifier lighter. Cycle until the wall matches the mood. You are not opening a settings app and hunting a folder of JPEGs. You are paging.

Obsidian is the exception that proves the chef still wants you to click once: pick the Omarchy theme inside Obsidian, once. After that it follows. Everything else already did.

Style is a hotkey. I need that sentence in your bones before we touch a file. You can live a long time on Super plus Control plus Shift plus Space and never open ~/.config. Tonight we will open it anyway, because you asked for five evenings, not three.

## 3. Install Inkblade
**Clock:** 2:19–3:38 · **185 words · 79s**

*[stage] Paste and run if you can. Naming omarchy-name-theme. Git themes keep colours, drop lua/terminal/vscode.json. Then pick a background.*

### You say

Worked example. Install Inkblade. That is the paper-and-ink look on this stream, and it is a real theme, not a vibe I described. Super plus Space, Install, Style, Theme, and paste the URL. Or in a terminal — Super plus Return, like Night 1:

omarchy theme install, then https://github.com/imcmurray/omarchy-inkblade-theme

The naming convention is omarchy, dash, name, dash, theme. That is why it shows up as Inkblade and not as a random folder. omarchy-inkblade-theme. Remember that pattern for tomorrow night, when you make one of your own, even if all you change is an accent.

A theme you install from git keeps the colours and drops anything that would run code — lua, terminal configs, vscode.json. That is deliberate. A wallpaper should not execute. Then pick it from the theme list, then Super plus Control plus Space and page a background until it sits.

If the install hangs on camera, we talk through the URL and move on. I am not debugging git in a live fifteen. The URL will still be in the description when the premiere ends. You can paste it after we close.

## 4. ~/.config vs /usr/share/omarchy
**Clock:** 3:38–4:51 · **170 words · 73s**

*[stage] ~/.config is yours. /usr/share/omarchy is pacman. Never edit the share tree. Old ~/.local/share/omarchy is stale.*

### You say

The rule. Say it with me, because this is the sentence that saves your weekend.

~/.config is yours. /usr/share/omarchy is the package. Pacman owns the share tree. If you edit files in /usr/share/omarchy, the next update puts them back, and you will think the machine gaslit you. It did not. You edited a package. Override in ~/.config. Always. If you need a sticky note on the monitor, write that.

The old path — ~/.local/share/omarchy — is stale. If a blog post from v3 sends you there, close the tab. Quattro ships Omarchy as pacman packages. The live manual is omarchy.org/manual. The live files are ~/.config.

This is the whole philosophy of Night 4 in one path. Beauty is motivation — Night 1's line. Ownership is a folder. You do not fork the operating system to change a gap width. You override. Tomorrow, when we talk snapshots, you will be glad ~/.config is yours, because /root can roll back and your theme will still be sitting there like it pays rent.

## 5. Setup menu
**Clock:** 4:51–6:08 · **179 words · 77s**

*[stage] Super+Space, type setup. Monitors, keybindings, input, Config → the file. Quit editor, Omarchy restarts what must.*

### You say

Do not hunt for files. Ask Setup. Super plus Space, type setup. That is System Settings, except the setting is a file you can diff, commit, and restore. Discovery in the menu. Same lesson as Night 1, now aimed at config.

Setup, Monitors. Setup, Keybindings. Setup, Input. Setup, Config, then the file you mean. The editor opens. Default editor is Neovim — Super plus Shift plus N energy from last night — and you can change that later under Setup, Defaults, Editor. Quit the editor, write the file, and Omarchy restarts what must restart. You do not reboot to change a gap. You write and quit.

This is the grown-up version of a GUI control panel. The GUI would hide the truth in a plist. Here the truth is Lua in a folder you own. If that sentence scared you on Night 1 — you will edit a config file — stay anyway. We will edit one official thing for homework, not forty lines of vibes. The menu walks you to the door. You just have to type setup.

## 6. hyprland.lua family
**Clock:** 6:08–7:29 · **189 words · 81s**

*[stage] Quattro is Lua, not old .conf. hyprland.lua, bindings.lua, monitors.lua, looknfeel.lua, input.lua.*

### You say

Quattro is Lua, not the old conf files. If a tutorial shows you hyprland.conf, that tutorial is a museum.

hyprland.lua is the main file. It loads the defaults plus your overrides. You do not paste a whole compositor config. You add the delta.

bindings.lua is keys you add or unbind. Tomorrow we will talk agents. Tonight: this is where Super plus Shift plus O could become Joplin instead of Obsidian, if that is your religion. Unbind, then bind. Setup, Keybindings opens this file.

monitors.lua is displays. Scale, position, the extra screen you swore you would not buy.

looknfeel.lua is gaps, borders, the default layout. Super plus L from Night 2 — scrolling versus dwindle — the default lives here. This is the friendliest first edit.

input.lua is the keyboard and the trackpad. Repeat rate, natural scroll, the feel of Super itself.

Five files. You do not need to memorize the paths. Super plus Space, type setup, Config. Let the menu walk you to the door. Homework is one of those files, not all five. Start with looknfeel.lua if you have no opinion yet. Gaps are a friendly first crime.

## 7. shell.json
**Clock:** 7:29–8:42 · **170 words · 73s**

*[stage] Bar lives in ~/.config/omarchy/shell.json. Drag a widget and it becomes canonical. omarchy bar defaults. omarchy bar position bottom. Idle timings same file.*

### You say

The bar lives in ~/.config/omarchy/shell.json — but only once you touch it. The moment you drag a widget, that file becomes canonical. New default widgets will not appear until you run omarchy bar defaults. That is not a bug. That is the machine saying: you took the wheel, we will not yank it back every update. Drag once, own it. That is the same rule as ~/.config versus the package tree, applied to a strip of pixels.

You can also omarchy bar position bottom. Or drag the empty space of the bar to another edge. Super plus Shift plus Space still hides it, from last night.

Idle timings live in the same file. Screensaver, lock. You do not need to recite the numbers tonight. You need to know the file exists, and that dragging a widget is a real decision with a real file behind it.

Quickshell reads this. Hyprland reads the Lua. Two languages, one home: ~/.config. Leave /usr/share/omarchy alone. I will say that until it is a reflex.

## 8. Updates
**Clock:** 8:42–10:02 · **186 words · 80s**

*[stage] Update → Omarchy. Snapshots first. Don't freelance pacman -Syu. Channels stable/RC/edge/dev. Limine restore /root not /home.*

### You say

Update, Omarchy. Or the badge by the clock — that little mark sitting next to the time you have been glancing at since Night 3. It snapshots first. That sentence is the safety net, and Night 5 will unpack it. Tonight: updates are a menu item, not a personality, and not a raw pacman habit you brought from a forum.

Do not freelance pacman -Syu. Omarchy will stop you. That is not gatekeeping. That is how you avoid a compositor, a shell, and a theme walking in different directions at 11 p.m. Use the menu. Or omarchy update, which is tomorrow's CLI, previewed because I need you to not wander.

Channels: stable, RC, edge, dev. Stable is the default, and it is how you keep a working week. RC if you like being useful. Edge and dev if you like Discord. Pick on purpose.

Broken after an update? Reboot. Pick the snapshot in Limine. That restores /root, not /home. Your essay in ~/.config survives. The broken package tree does not. Remember that split. It is the bargain under the floor, and tomorrow we stand on it.

## 9. Mess
**Clock:** 10:02–11:12 · **163 words · 70s**

*[stage] Update → Config resets one file. omarchy reinstall configs all. omarchy reinstall is the big red lever. Say it out loud.*

### You say

If you make a mess — and you will, if you are paying attention — there are levers, not vibes. I would rather you make a mess in ~/.config than pretend you never touch a file.

Update, Config resets one file. You edited looknfeel.lua into a crime. Reset that file. Keep the rest. That is the scalpel.

omarchy reinstall configs resets all of them. The configs. Not your photos. Not your notes. The shell's idea of itself. That is the broom.

omarchy reinstall is the big red lever, and it will overwrite your tweaks. Say that out loud before you pull it. I mean it. Say: this will overwrite my tweaks. Then pull it if you still mean it.

Discord, channel omarchy-help, if the levers are not the point and you are actually stuck. We will walk the breakage ladder tomorrow, including Caps Lock, which is Compose, which is a FAQ. Tonight, know the three rungs: one file, all configs, big red lever.

## 10. Recap
**Clock:** 11:12–12:19 · **156 words · 67s**

*[stage] Theme chord, background chord. Style is a hotkey. Config is a folder. Leave /usr/share/omarchy alone.*

### You say

Recap. Air-tap the long chords. They are long on purpose so you do not hit them while trying to hide the bar.

Super plus Control plus Shift plus Space — theme picker. Twenty-two shipped, plus whatever you installed. Whole shell follows. Super plus Control plus Space pages backgrounds. Obsidian gets one click inside the app, once.

Inkblade: omarchy theme install, then that GitHub URL, or Install, Style, Theme. Naming is omarchy-name-theme. Git themes keep colours and drop anything that would run code.

~/.config is yours. /usr/share/omarchy is the package. The old ~/.local/share/omarchy path is stale. If a tutorial sends you there, the tutorial is stale too.

Setup menu for monitors, keybindings, input, Config. Lua: hyprland.lua, bindings.lua, monitors.lua, looknfeel.lua, input.lua. shell.json becomes canonical when you drag a widget. omarchy bar defaults brings new widgets back. omarchy bar position bottom if you want the strip down there.

Style is a hotkey. Config is a folder. Leave /usr/share/omarchy alone.

## 11. Homework
**Clock:** 12:19–13:27 · **158 words · 68s**

*[stage] Switch theme (Inkblade or anything that makes you stay). One official config edit via Setup. Gaps in looknfeel, or a single binding.*

### You say

Homework. One look. One file. Both. I am watching.

Switch theme. Inkblade, or anything that makes you stay. Super plus Control plus Shift plus Space. Sit with it for ten minutes of real work — Super plus Return, Super plus Shift plus Return, the Night 1 pair — and see whether you want to keep typing. If you hate it, page another. Motivation is downstream from beauty. I am not quoting that again as poetry. I am assigning it.

Then one official config edit via Setup. Super plus Space, type setup. Gaps in looknfeel.lua, or a single binding. Not a forty-line experiment. Change a number. Save. Quit the editor. Watch Omarchy restart what must restart. Come back.

If you only do the theme, you had a nice evening. If you do the file, you live here. Super plus K if you blank. The theme chord is long. The cheatsheet still exists. Same time tomorrow we own the rest.

## 12. Tomorrow
**Clock:** 13:27–14:19 · **122 words · 52s**

*[stage] Tease Night 5: CLI, AI/Herdr, snapshots, encryption. Same time tomorrow. Series close tomorrow — say it, don't thank yet.*

### You say

Tomorrow is Night 5. Own the machine. Series close. Last live fifteen of this week. Do not expect a parade at the open. We still have a machine to own.

The omarchy CLI — theme set, pkg add, update, help, how agents customize with you instead of guessing at files. AI and Herdr. Making a theme of your own, even a tiny fork of Inkblade. Snapshots. The encryption bargain. Caps Lock is Compose, which is a FAQ, not a bug, and I have been saving that one for the close.

Same time tomorrow. Live. Do the homework so Night 5 is not you still on the default theme, asking whether ~/.config is real. It is real. You are about to own it.

## 13. Manual
**Clock:** 14:19–15:13 · **125 words · 54s**

*[stage] URL. Themes, dotfiles, updates. omarchy.org/themes for the extra shelf. Hold. Stop.*

### You say

omarchy.org/manual. Themes, dotfiles, updates. omarchy.org/themes for the extra shelf, if twenty-two plus Inkblade is not enough religion.

This was Night 4 of 5. Style is a hotkey. Config is a folder. Leave the package tree alone. If you remember nothing else, remember ~/.config is yours and Super plus Control plus Shift plus Space paints the whole shell.

Same time tomorrow. We close the series. Bring a theme you can stand to look at in the morning, and one file you actually edited. Super plus K when the slide is gone. Discord, channel omarchy-help, if Setup opened a file and you froze. You will not freeze. Change a gap. Go make it yours — tomorrow I will mean that as an order. Tonight it is homework.

---

**Don't invent hotkeys.** Super plus Grave: say “grave, the backtick.” Same time tomorrow. Series close tomorrow. Do not thank them yet.
