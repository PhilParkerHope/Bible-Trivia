// File: App.js
// Developer: Phil Parker

const App = {
  components: { Board, QuestionModal },
  template: `
    <div>
  <h1 :class="{ 'title-animate': gameStarted }">{{ gameTitle }}</h1>

  <!-- Intro screen -->
  <div v-if="!gameStarted" class="intro-wrapper">
    <p><strong>Welcome to Bible Trivia Challenge!</strong></p>
    <p>Select a question from the board. Each category has 5 questions worth 100–500 points.</p>
    <p>Choose the correct answer to earn points. Wrong answers earn nothing!</p>
    <p>Try to clear the whole board for a perfect score.</p>
    <button @click="startGame">Start Game</button>
  </div>

  <!-- Gameplay screen -->
  <div
  v-if="gameStarted && !gameOver"
  class="board-wrapper"
  :class="{ 'board-visible': boardVisible }"
>
    <div style="margin-bottom: 10px;">
      <strong>Score: {{ score }}</strong>
    </div>

    <Board
      :categories="categories"
      :pointValues="pointValues"
      :onClueClick="selectQuestion"
      :usedClues="usedClues"
    />

    <QuestionModal
      v-if="currentQuestion"
      :questionObj="currentQuestion"
      :onClose="closeQuestion"
    />
  </div>

  <!-- Game over screen -->
  <div v-if="gameOver">
    <h2>🎉 Game Over! 🎉</h2>
    <p>Your final score: <strong>{{ score }}</strong> / {{ maxScore }}</p>

    <p v-if="score === maxScore">🥇 Perfect score! You're a Bible trivia master!</p>
    <p v-else-if="score >= 5000">🔥 Amazing job! You're well-studied!</p>
    <p v-else-if="score >= 2500">👍 Solid effort! Keep learning!</p>
    <p v-else>📘 Great start — dive deeper into the Word!</p>

    <button @click="restartGame">Play Again</button>
  </div>

</div>

  `,
  data() {
    const allCategories = Object.keys(questions);
    const shuffled = allCategories.sort(() => 0.5 - Math.random());
    const selectedCategories = shuffled.slice(0, 5);


    return {
      gameTitle: "Bible Trivia Challenge",
      questions,
      categories: selectedCategories,
      pointValues: ["100", "200", "300", "400", "500"],
      currentQuestion: null,
      gameStarted: false,
      usedClues: [],
      gameOver: false,
      score: 0,
      boardVisible: false,
      maxScore: 5 * 1500
    };
  },
  methods: {
    startGame() {
  this.gameStarted = true;
  document.getElementById('sfx-intro').play();

  // delay trigger to allow transition
  setTimeout(() => {
    this.boardVisible = true;
  }, 100); // wait one tick to allow reflow
},
    restartGame() {
      const allCategories = Object.keys(this.questions);
      const shuffled = allCategories.sort(() => 0.5 - Math.random());
      const selectedCategories = shuffled.slice(0, 5);

      this.categories = selectedCategories;
      this.usedClues = [];
      this.score = 0;
      this.currentQuestion = null;
      this.gameOver = false;
      this.gameStarted = true;
    },

    selectQuestion(category, value) {
      if (this.currentQuestion) return;

      const questionSet = this.questions[category][value];
      if (questionSet.length > 0) {
        const randomIndex = Math.floor(Math.random() * questionSet.length);
        const selected = { ...questionSet[randomIndex] };

        // Shuffle the options
        selected.options = [...selected.options].sort(
          () => Math.random() - 0.5
        );

        this.currentQuestion = {
          ...selected,
          category,
          value: parseInt(value),
        };

        // Remove selected question
        this.questions[category][value].splice(randomIndex, 1);

        // Track used clue
        this.usedClues.push({ category, value });
      } else {
        alert("No more questions in this slot.");
      }
    },
    closeQuestion(correct) {
      if (correct) {
        this.score += this.currentQuestion.value;
      }
      this.currentQuestion = null;

      // Check if all clues have been used
      if (
        this.usedClues.length >=
        this.categories.length * this.pointValues.length
      ) {
        this.gameOver = true;
        document.getElementById('sfx-winner').play();
      }
    },
  },
};

// Mount the app
Vue.createApp(App).mount("#app");
