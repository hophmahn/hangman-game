export default {
  methods: {
    handleUpdate (letter) {
      if (this.guesser === 'Player') {
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
