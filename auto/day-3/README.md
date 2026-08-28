# Night 3 auto-generation

Assets for a live evening episode: **Night 3 of 5 — Work**.

## Spoken duration

**2,119 spoken words** at 140 wpm = **15:08**. That is the runtime. Do not pad silence. Do not stretch clips toward a 15:00 wall-clock if the words are shorter, and do not trim speech to fit 15:00 if the words are longer. Fifteen minutes is spoken teaching, not holds.

Beats: 13. Longest TTS paste: beat 8 (Terminal / nvim / browser / OBS), 1232 characters (limit 4000).

## Intended pipeline

Per-beat TTS audio → stills or deck capture → concat. No API keys live here. Do not render video from this folder as part of script work.

1. **TTS, one beat at a time.** Read `slides.json` or paste sections from `narration.md`. ElevenLabs Eliza (warm conversational American female). Name files `01-<id>.wav` …
2. **Picture.** Freeze a 1920×1080 PNG of each slide from the live deck, or capture the deck silent 16:9.
3. **Mux.** Duration = audio length (which should be close to `secondsHint` because `secondsHint` is words/140, min 20s). Do not pad.
4. **Concat.** `ffmpeg -f concat` into `day-3.mp4`.

## Files

| File | What |
| --- | --- |
| `slides.json` | `index`, `id`, `title`, `speak`, `secondsHint` for all 13 beats |
| `narration.md` | Same `speak` text, one heading per beat, for TTS UIs with character limits |

`speak` is the Night 3 You say column, cleaned to spoken prose. Hotkeys are written “Super plus K” so a TTS engine does not eat the `+`.
