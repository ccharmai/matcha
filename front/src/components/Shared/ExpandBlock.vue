<template>
  <div class="shared_expand_block__wrapper">
    <div class="placeholder"
      :class="{ 'expanded': isExpand }"
      @click="isExpand = !isExpand"
    >
      {{ text }}
    </div>
    <transition name="slide">
      <div class="content" v-show="isExpand"><slot /></div>
    </transition>
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String },
  },
  data() {
    return {
      isExpand: false,
    };
  },
  mounted() {
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) this.isExpand = false;
    });
  },
};
</script>

<style lang="scss">
  @import "@/assets/style/vars.scss";
  .shared_expand_block__wrapper {
    position: relative;
    .placeholder {
      color: $white;
      font-weight: bold;
      font-size: 1.1em;
      background-color: #e63563;
      padding: 10px 20px;
      border-radius: 10px;
      cursor: pointer;
      box-shadow: 0 0 20px 0px #bdbdbd57;
      transition: .1s ease background;
      &.expanded {
        background: #ff0042;
      }
    }
    .content {
      position: absolute;
      right: 0;
      margin-top: 10px;
      background: #9e090946;
      padding: 10px 20px;
      border-radius: 10px;
    }
    .slide-enter-active {
      animation: menu-slide .3s;
    }
    .slide-leave-active {
      animation: menu-slide .3s reverse;
    }
    @keyframes menu-slide {
      from {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
  }
</style>
