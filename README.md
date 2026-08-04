# Prelim Study Planner

An hour-by-hour planner for the **CURRO IEB Preliminary Examinations 2026**.

Live: **https://voigtalani-maker.github.io/prelim-planner/**

## What it does

- Eight weeks, 3 August – 27 September 2026, one column per day — the two weeks of run-up before the first paper, then the exam period itself.
- **Exam papers fill themselves in** at their real session times — morning papers 08:00–10:00, afternoon papers 14:00–16:00. They show as solid dark blocks with a pastel edge in the subject's colour.
- **Study time is suggested automatically** in every free hour, rotating two hours per subject through whichever papers are within the next fortnight. All study blocks are italic so they never get confused with a real exam; suggestions are also dashed and lighter, while the ones you pick yourself are solid and bold.
- **Breaks are built in** — 12:00, 19:00, and the hour straight after every paper.
- Every non-exam hour is a dropdown: pick any subject, pick Break, or leave it free. Your choices override the suggestions and save automatically.
- Days run 06:00–20:00, with Saturdays going through to 22:00.

## Hours per paper

Below the grid is a panel for every paper where you can:

- **Set a target** — how many hours you want to spend on that paper.
- **See what you have planned** — hours you have assigned to it in the grid, against the target, with how many are still left to plan. Only hours you pick yourself count; a suggested block starts counting when you open it and choose **✓ Keep**.
- **Drag the Studied bar** — log the hours you have actually done. This is tracked separately from what you planned, so you can see the difference between intending to study and having studied.
- **Attach the demarcation** — at the foot of each paper, add the scope sheet (PDF, photo, Word file, anything up to 10 MB). Once attached it becomes a link that opens in a new tab, with a × to remove it.

At the top of the panel: total hours still to plan, total hours studied, and how many hours are **still free in the timetable** — everything from today onwards that isn't an exam, a break, or already planned. The hours before a morning paper are left out, since you'll be writing.

## Using it

Open the link, pick a week, and start planning. On a laptop the whole week fits the screen.

On a phone you get a **Week / Day** toggle:

- **Week** shows all seven days — swipe the grid sideways, and the hour column stays pinned so you never lose the times. The day buttons scroll you straight to a day.
- **Day** gives one day at a time, filling the screen at a comfortable text size. The day buttons switch days.

Whichever you pick is remembered for next time.

It installs as an app — "Add to Home Screen" on iOS, or the install icon in the address bar on desktop — and works offline once loaded.

Your plan is stored in the browser on the device you're using, so it won't follow you between your phone and your laptop. Attached demarcations are held in the browser's own file store (IndexedDB) on that device too — they are never uploaded anywhere.

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
