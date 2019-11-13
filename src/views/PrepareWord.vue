<template>
  <DefaultLayout>
    <h1>Set the word</h1>
    <input type="text" class="prepare-word-input" placeholder="Type some word..." v-model="word"/>
    <p class="error-message" v-if="errorMessage.length > 0">{{ errorMessage }}</p>
    <div class="button-wrapper">
      <Button size="sm" :onClick="onSubmit" :disabled="isButtonDisabled">Submit</Button>
    </div>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
import Button from '@/components/Button'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    DefaultLayout,
    Button
  },
  data () {
    return {
      word: ''
    }
  },
  computed: {
    ...mapGetters(['errorMessage']),
    isButtonDisabled () {
      return !this.word.length > 0
    }
  },
  methods: {
    ...mapActions(['setNewWordForComputer']),
    async onSubmit () {
      const isValid = await this.setNewWordForComputer(this.word)

      if (isValid) {
        this.$router.history.push('/game')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.prepare-word-input {
  padding: 15px;
  width: 80%;
  font-size: 1.5em;
}

.error-message {
  color: red;
  font-weight: bolder;
}

.button-wrapper {
  margin: 20px auto;
  width: 50%;
}
</style>
