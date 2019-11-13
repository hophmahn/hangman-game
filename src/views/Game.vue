<template>
  <DefaultLayout>
    <h1>Game</h1>
    <HangmanContainer :misses="misses" />
    <div>
      <p v-if="!word">Word is being generated...</p>
      <DashedWord v-else :word="word" :foundLetters="foundLetters" />
    </div>
    <Guess @update="handleUpdate" :disabled="!inProgress" />
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
import { mapGetters, mapActions } from 'vuex'
import HangmanContainer from '@/components/HangmanContainer'
import DashedWord from '@/components/DashedWord'
import Guess from '@/components/Guess'

export default {
  components: {
    DefaultLayout,
    HangmanContainer,
    DashedWord,
    Guess
  },
  data () {
    return {
      misses: 0,
      foundLetters: []
    }
  },
  computed: {
    ...mapGetters(['guesser', 'inProgress', 'word'])
  },
  created () {
    this.setNewWordForPlayer()
  },
  methods: {
    ...mapActions(['stopGame', 'setResult', 'setNewWordForPlayer']),
    onClick () {
      this.finishGame('win')
    },
    finishGame (result) {
      this.setResult(result)
      this.stopGame()
      this.$router.history.push('/result')
    },
    handleFoundLetter (letter) {
      this.foundLetters.push(letter)

      if ([...new Set(this.word)].length === this.foundLetters.length) {
        this.finishGame('win')
      }
    },
    handleMissedLetter (letter) {
      ++this.misses

      if (this.misses === 6) {
        this.finishGame('lose')
      }
    },
    handleUpdate (letter) {
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
</script>
