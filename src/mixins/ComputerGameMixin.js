export default {
  data () {
    return {
      frequentLetters: ['e', 't', 'a', 'o', 'i', 'n', 's', 'h', 'r', 'd', 'l', 'u']
    }
  },
  mounted () {
    this.guess()
  },
  methods: {
    guess () {
      setTimeout(() => {
        const letter = this.frequentLetters.shift()
        this.handleUpdate(letter)
      }, 1000)

      setTimeout(() => {
        this.guess()
      }, 2000)
    },
    handleUpdate (letter) {
      if (this.guesser === 'Computer') {
        if (this.misses < 6) {
          if (this.word.split('').includes(letter)) {
            this.handleFoundLetter(letter)
          } else {
            this.handleMissedLetter(letter)
          }
        } else {
          this.finishGame('lose')
        }
      }
    }
  }
}
