<template>
  <DefaultLayout>
    <h1>You {{ result }}!</h1>
    <Button size="md" :onClick="onButtonPress">Go to menu</Button>
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
  computed: {
    ...mapGetters(['result'])
  },
  methods: {
    ...mapActions(['setResult']),
    onButtonPress (event) {
      this.setResult('')
      this.$router.history.push('/')
    }
  }
}
</script>
