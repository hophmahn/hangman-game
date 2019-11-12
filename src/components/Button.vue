<template>
  <button :class="classObject" @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    size: String,
    onClick: {
      type: Function,
      required: true
    }
  },
  computed: {
    classObject () {
      return {
        btn: true,
        [ this.size + '-btn' ]: true
      }
    }
  }
}
</script>

<style lang="scss" scoped>
button {
    display: inline-block;
    border: none;
    padding: 1rem 2rem;
    margin: 0;
    text-decoration: none;
    background: #0069ed;
    color: #ffffff;
    font-family: sans-serif;
    font-size: 1rem;
    line-height: 1;
    cursor: pointer;
    text-align: center;
    transition: background 250ms ease-in-out, transform 150ms ease;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 100%;
}

button:hover,
button:focus {
    background: #0053ba;
}

button:focus {
    outline: 1px solid #fff;
    outline-offset: -4px;
}

button:active {
    transform: scale(0.99);
}

@media screen and (max-width: 480px) {
  button {
    text-align: left;
  }
}

.sm-btn {}

.md-btn {
  font-size: 1.5em;
}

.lg-btn {
  font-size: 1.5em;
}
</style>
