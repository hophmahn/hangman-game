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
import PlayerGameMixin from '@/mixins/PlayerGameMixin'
import ComputerGameMixin from '@/mixins/ComputerGameMixin'

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
    if (this.guesser === 'Player') {
      this.setNewWordForPlayer()
    }
  },
  mixins: [
    PlayerGameMixin,
    ComputerGameMixin
  ],
  methods: {
    ...mapActions(['stopGame', 'setResult', 'setNewWordForPlayer', 'setNewWordForComputer']),
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
    }
  }
}
</script>
