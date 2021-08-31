<template>
  <div class="inp__wrapper">
    <div class="compose">
      <div class="placeholder" :class="{ 'active': modelValue.length > 0 }">{{ placeholder }}</div>
      <input :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" >
    </div>
    <div class="errors">f</div>
  </div>
</template>

<script>
export default {
  props: {
    modelValue: String,
    placeholder: { type: String, default: '' },
  },
};
</script>

<style lang="scss">
  @import '@/assets/style/vars.scss';
  .inp__wrapper {
    margin-top: 10px;
    .compose {
      position: relative;
    }
    .placeholder {
      pointer-events: none;
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
      transition: .1s $anim top, transform;
      color: $white;
      &.active {
        top: 0;
        transform: translateY(-100%);
      }
    }
    input {
      outline: none;
      background: none;
      border: 2px solid $white;
      border-radius: 7px;
      padding: 5px 7px;
      color: $white;
      font-size: 1em;
      font-weight: 500;
    }
    .errors {
      margin-top: 5px;
      font-size: 0.9em;
      color: $red;
    }
  }
</style>
