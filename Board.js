// File: Board.js
// Developer: Phil Parker

const Board = {
  props: ['categories', 'pointValues', 'onClueClick', 'usedClues'],
  components: { Clue },
  template: `
    <div class="board">
      <div
        v-for="category in categories"
        :key="category"
        class="category-header"
      >
        {{ category }}
      </div>

      <template v-for="value in pointValues">
        <Clue
          v-for="category in categories"
          :key="category + '-' + value"
          :category="category"
          :value="value"
          :onClick="onClueClick"
          :disabled="isUsed(category, value)"
        />
      </template>
    </div>
  `,
  methods: {
    isUsed(category, value) {
      return this.usedClues.some(
        clue => clue.category === category && clue.value == value
      );
    }
  }
};
