<template>
  <div class="gallows">
    <div class="top" />
    <div class="rope" />
    <slot></slot>
    <div class="column" />
    <div class="base" />
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles.scss";

.gallows {
  .base {
    @include black-background();
    height: 5px;
    width: 150px;
  }

  .column {
    @include black-background();
    height: 300px;
    width: 5px;
    margin-left: 115px;
  }

  .top {
    @include black-background();
    height: 5px;
    width: 100px;
    margin-left: 20px;
  }

  .rope {
    @include black-background();
    width: 5px;
    height: 20px;
    margin-left: 20px;
    margin-bottom: -20px;
  }
}
</style>
