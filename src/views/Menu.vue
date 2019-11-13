<template>
  <DefaultLayout>
    <h1>Hangman</h1>
    <h2>Who is going to guess?</h2>
    <div class="buttons-wrapper">
      <Button size="lg" :onClick="onButtonPress">Player</Button>
      <Button size="lg" :onClick="onButtonPress">Computer</Button>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
import Button from '@/components/Button'
import { mapActions } from 'vuex'

export default {
  components: {
    DefaultLayout,
    Button
  },
  methods: {
    ...mapActions(['startGame']),
    onButtonPress (event) {
      const guesser = event.target.innerHTML
      this.startGame(guesser)

      if (guesser === 'Player') {
        this.$router.history.push('/game')
      } else {
        this.$router.history.push('/prepare-word')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.buttons-wrapper {
  display: flex;
  flex-direction: column;

  & > *:first-child {
    margin-bottom: 10px;
  }
}
</style>
