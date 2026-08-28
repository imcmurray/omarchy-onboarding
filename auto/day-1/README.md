# Day 1 auto-generation

Assets for Night 1 of 5, a live evening episode. Spoken by ElevenLabs Eliza (Conversational Podcast Host). No API keys live here. Do not run Docker / hyperlive from this folder yet. Do not render video from these files unless asked.

## Duration

**Duration is spoken word count at ~140 wpm. Do NOT pad silence to 15:00.**

Night 1 speak text is **2260 words**, about **16:09** at 140 words per minute. `secondsHint` on each slide is `round(words / 140 * 60)`, minimum 20. Concatenate the sixteen audio clips; the night is as long as Eliza talking. Padding gaps to force a 15:00 file is a failure mode — the old short script did that and still only had ~3:36 of teaching.

## Intended pipeline

Per-slide TTS audio → ffmpeg stills or deck capture → concat MP4.

1. **TTS, one slide at a time.** Read `slides.json` (or paste sections from `narration.md`). Generate one audio file per slide — ElevenLabs (or similar) **UI**, not an API key in this repo. Name them `01-title.wav` … `16-manual.wav` (wav or mp3). Clip length should follow the speech. Do not pad each clip toward 15:00.
2. **Picture.** Either:
   - freeze a 1920×1080 PNG of each slide (`ffmpeg` still, or a screenshot of `/day-1/` in the browser), or
   - capture the deck as a silent 16:9 recording and cut on slide changes.
   Stills are the default: the deck already holds on each card.
3. **Mux.** For each index, `ffmpeg` the still (looped) with that slide’s audio. Duration = audio length.
4. **Concat.** `ffmpeg -f concat` the sixteen slide MP4s. Hold the last card ~3 seconds after speech, matching the script closer — that hold is the only intentional silence.

Optional later: drive the live deck with timed Space keypresses instead of stills. Same `slides.json` clock.

## Files

| File | What |
| --- | --- |
| `slides.json` | `index`, `id`, `title`, `speak`, `secondsHint` for all 16 slides |
| `narration.md` | Same `speak` text, one heading per beat, for TTS UIs with character limits |
| `../../scripts/day-1.md` | Presenter script with clocks, You say, and italic `[stage]` notes |

`speak` is the Night 1 “You say” column, cleaned to spoken prose (no stage directions). Hotkeys are written “Super plus K” so a TTS engine does not eat the `+`.
