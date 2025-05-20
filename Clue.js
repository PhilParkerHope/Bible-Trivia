// File: Clue.js
// Developer: Phil Parker

const Clue = {
  props: ['category', 'value', 'onClick', 'disabled'],
  template: `
    <div
      class="clue"
      :class="{ 'disabled-clue': disabled }"
      @click="handleClick"
    >
      <span v-if="!disabled">{{ value }}</span>
    </div>
  `,
  methods: {
    handleClick() {
      if (!this.disabled) {
        this.onClick(this.category, this.value);
      }
    }
  }
};
