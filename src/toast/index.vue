<template>
  <div class="wrap" v-if="showWrap" :class="showContent?'animate_in':'animate_out'">Hello Toast</div>
</template>

<style>
.wrap {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, .35);
  padding: 10px;
  border-radius: 5px;
  color: #fff
}

.fadein {
  animation: animate_in 0.25s;
  opacity: 1;
}

.fadeout {
  animation: animate_out 0.25s;
  opacity: 0;
}

@keyframes animate_in {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes animate_out {
  0%{
    opacity: 1;
  }
  100%{
    opacity: 0;
  }
}
</style>