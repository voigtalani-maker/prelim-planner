# Prelim Study Planner

An hour-by-hour planner for the **CURRO IEB Preliminary Examinations 2026**.

Live: **https://voigtalani-maker.github.io/prelim-planner/**

## What it does

- Six weeks of the exam period, 17 August – 27 September 2026, one column per day.
- **Exam papers fill themselves in** at their real session times — morning papers 08:00–10:00, afternoon papers 14:00–16:00. They show as solid dark blocks with a pastel edge in the subject's colour.
- **Study time is suggested automatically** in every free hour, rotating two hours per subject through whichever papers are within the next fortnight. Suggestions are italic and dashed so they never get confused with a real exam.
- **Breaks are built in** — 12:00, 19:00, and the hour straight after every paper.
- Every non-exam hour is a dropdown: pick any subject, pick Break, or leave it free. Your choices override the suggestions and save automatically.
- Days run 06:00–20:00, with Saturdays going through to 22:00.

## Using it

Open the link, pick a week, and start planning. On a phone it shows one day at a time with a day picker; on a laptop you get the whole week side by side.

It installs as an app — "Add to Home Screen" on iOS, or the install icon in the address bar on desktop — and works offline once loaded.

Your plan is stored in the browser on the device you're using, so it won't follow you between your phone and your laptop.

"Clear my choices" at the bottom wipes everything you've picked and returns to the suggested plan.

## Files

| File | Purpose |
|---|---|
| `index.html` | The entire app — markup, styles and logic, no dependencies |
| `manifest.webmanifest` | PWA metadata |
| `sw.js` | Service worker: offline shell, network-first navigation |
| `icon-*.png`, `apple-touch-icon-180.png` | App icons |

## Changing the timetable

The exam dates live in the `EXAM_DATA` object near the top of the script in `index.html`, keyed by date:

```js
'2026-08-18': { sessions: [
  { subj: 'catP1', hours: [8, 9, 10] },
  { subj: 'egdP1', hours: [14, 15, 16] }
] },
```

`hours` lists the clock hours the paper occupies. Subject ids come from the `SUBJECTS` list just above it. A day marked `{ close: true }` gets the "Schools close" note.
