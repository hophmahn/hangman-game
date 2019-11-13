<template>
  <div class="wrapper">
    <Gallows>
      <Hangman :misses="misses" />
    </Gallows>
  </div>
</template>

<script>
import Gallows from './Gallows'
import Hangman from './Hangman'

export default {
  props: {
    misses: Number
  },
  components: {
    Gallows,
    Hangman
  },
  data () {
    return {
      // misses: 0,
    }
  },
  methods: {
    incrementMisses () {
      if (this.misses < 6) {
        this.misses++
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
