<template>
  <ABtn @click="onClick">Next</ABtn>
</template>

<script setup lang="ts">
const swiper = useSwiper();
function onClick() {
  swiper.value.slideNext();
}
</script>
