<template>
  <div class="hangman">
    <div
      v-for="bodyPart in bodyParts"
      :key="bodyPart"
      :class="bodyPart"
      v-show="shouldRender(bodyPart)"
    />
  </div>
</template>

<script>
export default {
  props: {
    misses: Number
  },
  data () {
    return {
      bodyParts: Object.freeze(['head', 'torso', 'right-arm', 'left-arm', 'right-leg', 'left-leg'])
    }
  },
  computed: {
    bodyPartsToRender () {
      return this.bodyParts.slice(0, this.misses)
    }
  },
  methods: {
    shouldRender (limb) {
      return this.bodyPartsToRender.includes(limb)
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles.scss";

@mixin limb($marginLeft, $marginTop, $rotate) {
  width: 50px;
  height: 5px;
  @include black-background();
  margin-left: $marginLeft;
  margin-top: $marginTop;
  transform: rotate($rotate);
}

.hangman {
  position: absolute;
  margin-top: 15px;
  margin-left: -7px;

  .head {
    width: 50px;
    height: 50px;
    border: 5px solid $mainColor;
    border-radius: 50%;
  }

  .torso {
    width: 5px;
    height: 100px;
    @include black-background();
    margin-left: 30px;

  }

  .right-arm {
    @include limb(-15px, -75px, 30deg);
  }

  .left-arm {
    @include limb(30px, -5px, 150deg);
  }

  .right-leg {
    @include limb(-12px, 80px, -40deg);
  }

  .left-leg {
    @include limb(27px, -5px, -140deg);
  }
}
</style>
