<template>
  <DefaultLayout>
    <h1>Game</h1>
    <p>{{ guesser }} {{ inProgress }}</p>
    <button @click="onClick">stop game</button>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: { DefaultLayout },
  computed: {
    ...mapGetters(['guesser', 'inProgress'])
  },
  methods: {
    ...mapActions(['stopGame', 'setResult']),
    onClick () {
      this.setResult('win')
      this.stopGame()
      this.$router.history.push('/result')
    }
  }
}
</script>
