export default {
  methods: {
    handleUpdate (letter) {
      console.log('computer game', letter)
      if (this.guesser === 'Computer') {
        console.log('this is player game mixin')
      }
    }
  }
}
