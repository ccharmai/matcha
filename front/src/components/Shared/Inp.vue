<template>
  <div class="inp__wrapper">
    <div class="inp__compose">
      <div class="inp__placeholder" :class="{ 'active': modelValue.length > 0 || focus }">
        {{ placeholder }}
      </div>
      <input
      class="inp__input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus="focus = true"
        @blur="focus = false"
        :type="password ? 'password' : 'text' "
        autocomplete="new-password"
      >
    </div>
    <div class="inp__errors">
      <slot name="errors" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      focus: false,
    };
  },
  props: {
    modelValue: String,
    placeholder: { type: String, default: '' },
    password: { type: Boolean, default: false },
  },
};
</script>

<style lang="scss">
  @import '@/assets/style/vars.scss';
  .inp__wrapper {
    width: 100%;
    margin-top: 25px;
    .inp__compose {
      position: relative;
    }
    .inp__placeholder {
      pointer-events: none;
      position: absolute;
      left: 9px;
      top: 50%;
      transform: translateY(-50%);
      transition: .2s $anim top, transform;
      color: $pink;
      font-weight: 600;
      font-size: 0.9em;
      &.active {
        top: 0;
        transform: translateY(-100%);
      }
    }
    .inp__input {
      outline: none;
      background: none;
      border: 2px solid $pink;
      border-radius: 7px;
      padding: 5px 7px;
      color: black;
      font-size: 1em;
      font-weight: 500;
      &:-webkit-autofill::first-line {
        font-size: 18px;
        font-family: Nunito, Avenir, Arial, sans-serif;
      }
    }
    .inp__errors {
      margin-top: 5px;
      font-size: 0.9em;
      color: $red;
    }
  }
</style>
