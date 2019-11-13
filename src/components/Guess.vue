<template>
  <input
    type="text"
    v-model="guess"
    @keyup="keyUp"
    :maxlength="1"
    :disabled="disabled"
    placeholder="Type a letter here..."
  />
</template>

<script>
export default {
  props: {
    disabled: Boolean
  },
  data () {
    return {
      guessIn: ''
    }
  },
  computed: {
    guess: {
      get () {
        return this.guessIn
      },
      set (val) {
        this.guessIn = val.substr(-1)
      }
    }
  },
  methods: {
    keyUp (e) {
      if (e.keyCode >= 65 && e.keyCode <= 90) {
        this.guess = ''
        this.$emit('update', e.key)

        if (this.disabled) {
          this.guess = ''
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  position: fixed;
  left: 0;
  bottom: 0;
  height: 80px;
  width: 100vw;
  font-size: 2em;
  text-align: center;
}

@media screen and (max-width: 768px) {
  input {
    position: relative;
    left: 0;
    width: 80vw;
  }
}
</style>
