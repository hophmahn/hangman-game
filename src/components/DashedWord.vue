<template>
  <div class="wrapper">
    <div
      v-for="(letter, index) in word"
      :key="letter+'-'+index"
      :class="{
        'letter': true,
        'dashed-letter': !isFoundLetter(letter)
      }"
    >
      {{ isFoundLetter(letter) ? letter : '' }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    word: String,
    foundLetters: Array
  },
  methods: {
    isFoundLetter (letter) {
      return this.foundLetters.includes(letter)
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  margin-top: 100px;

  .letter {
    font-size: 2em;

    &:not(:first-child) {
      margin-left: 0.5em;
    }
  }

  .dashed-letter {
    border-bottom: 3px solid black;
    width: 30px;
  }
}

@media screen and (max-width: 768px) {
  .wrapper {
    margin-top: 50px;
  }
}
</style>
