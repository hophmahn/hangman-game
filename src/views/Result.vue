<template>
  <DefaultLayout>
    <h1>You {{ result }}!</h1>
    <Button size="md" :onClick="onButtonPress">Go to menu</Button>
  </DefaultLayout>
</template>

<script>
import DefaultLayout from '@/layouts/Default'
import Button from '@/components/Button'

export default {
  components: {
    DefaultLayout,
    Button
  },
  props: {
    result: String
  },
  methods: {
    onButtonPress (event) {
      this.$router.history.push('/')
    }
  }
}
</script>
