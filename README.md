# Four to Win — IEEE ZC-SB Education

A four-question circuits quiz with a 60-question bank and three choices per question.

[**Open the quiz**](https://eslammohamed202220-beep.github.io/ieee-zcsb-four-to-win/) · [**View the source**](https://github.com/eslammohamed202220-beep/ieee-zcsb-four-to-win)

## How it works

- Each visit or refresh selects four random questions. The new set excludes all four questions from the previous round on the same device.
- The three choices are shuffled independently for each question. A player can change a choice before moving on.
- Four correct answers show the gift message. Any other score shows “Hard luck” and an answer review.
- The question bank covers 15 topics from circuit laws, diode models, rectification, filtering, clipping, clamping, and voltage multiplication.

The quiz is a static site with no server-side account or prize verification. It only shows the result locally in the browser; organizers decide how to redeem a gift.

## Run locally

Install Node.js and run:

```bash
npm run dev
```

Then open <http://localhost:4177/>. There are no npm dependencies to install.

## Files

- `questions.js` — the 60 questions, answer keys, and explanations.
- `app.js` — question selection, navigation, scoring, and review.
- `index.html` and `style.css` — the interface and the opening series-circuit illustration.
- `assets/` and `fonts/` — the branch logo and locally hosted typefaces.

The questions were written from the circuit topics in the lecture PDFs supplied for the IEEE ZC-SB Education presentation. Those PDFs are not redistributed here. The IEEE Zewail City Student Branch logo belongs to the branch. Barlow Condensed and IBM Plex are provided under the SIL Open Font License; license texts are in `fonts/licenses/`. This repository does not grant reuse rights for the code or IEEE mark.
