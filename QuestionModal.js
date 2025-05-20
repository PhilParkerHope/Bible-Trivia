// File: QuestionModal.js
// Developer: Phil Parker

const QuestionModal = {
  props: ['questionObj', 'onClose'],
  data() {
    return {
      selectedAnswer: null,
      feedback: null
    };
  },
  template: `
    <div class="modal" v-if="questionObj">
      <h2>{{ questionObj.question }}</h2>
      <div>
        <button
          v-for="opt in questionObj.options"
          :key="opt"
          @click="handleClick(opt)"
          :disabled="selectedAnswer !== null"
          style="margin: 5px;"
        >
          {{ opt }}
        </button>
      </div>

      <div v-if="feedback" style="margin-top: 15px; font-weight: bold;">
        {{ feedback }}
      </div>

      <div v-if="selectedAnswer !== null" style="margin-top: 10px;">
        <button @click="close">Continue</button>
      </div>
    </div>
  `,
  methods: {
    handleClick(option) {
      const isCorrect = option === this.questionObj.answer;
      this.selectedAnswer = option;

      const feedbackAudio = new Audio(isCorrect ? 'sfx/correct.mp3' : 'sfx/incorrect.mp3');
      feedbackAudio.play();

      this.feedback = isCorrect
        ? "✅ Correct!"
        : `❌ Incorrect. The correct answer was: ${this.questionObj.answer}`;
    },
    close() {
      const isCorrect = this.selectedAnswer === this.questionObj.answer;
      this.onClose(isCorrect);
    }
  }
};
