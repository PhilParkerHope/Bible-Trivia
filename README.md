# 📖 Bible Trivia Challenge

A web-based Bible trivia game inspired by the Jeopardy format — created by **Phil Parker**.

Players select questions from a 5x5 game board, answer multiple-choice Bible questions, and try to clear the board for a perfect score.

Hosted-friendly and mobile-friendly (ish 😉).

## 🎮 How to Play

* Click "Start Game" to begin.
* Select any clue (question) on the board.
* Choose the correct answer from four options.
* Earn points based on difficulty (100–500 points).
* Try to clear the board for a perfect 6250-point run!

Includes:

* 🔊 Sound effects
* 🧠 Randomized questions
* ✝️ 10+ Bible categories like Old Testament, Parables, Paul, Apostles, and more.

## 🌐 Hosting Options

You can host this game as a standalone site or embed it in an `<iframe>`.

Tested with:

* GitHub Pages
* AWS S3 static hosting
* Azure Blob Storage with static site hosting

## 📁 Project Structure

```
/sfx/                 ← MP3 sound effects (correct, incorrect, intro, winner)
questions.js          ← All trivia question data
App.js                ← Main Vue logic
Board.js              ← Game board component
Clue.js               ← Single clue tile
QuestionModal.js      ← Modal popup for answering questions
index.html            ← Main page
```

## 🚫 License

This project is **© 2025 Phil Parker. All rights reserved.**

The source code is made **publicly viewable for learning purposes**, but may **not** be:

* copied,
* reused,
* modified,
* or redistributed

without written permission.

If you want to build your own version or remix this, [reach out](mailto:philcparker8@gmail.com) for permission.

---

## 🙏 Built with ❤️ and Vue 3

```html
<script src="https://unpkg.com/vue@3"></script>
```
