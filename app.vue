<template>
  <div>
    <Swiper
      :grab-cursor="true"
      :effect="'creative'"
      :allow-slide-next="false"
      :initial-slide="2"
      :creative-effect="{
        prev: {
          shadow: true,
          translate: ['-20%', 0, -1],
        },
        next: {
          translate: ['100%', 0, 0],
        },
      }"
      :modules="[SwiperEffectCreative]"
    >
      <SwiperSlide class="bg-coolgray slide">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        dignissimos dolores error est impedit ipsa iusto, magni perspiciatis
        quae! Porro.
      </SwiperSlide>
      <SwiperSlide class="bg-blue slide">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
        eligendi explicabo nisi officia quos temporibus veritatis. Aliquam,
        quod, rerum.
      </SwiperSlide>
      <SwiperSlide class="bg-red slide">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
        dolore esse exercitationem magni quas quasi suscipit. Aut, odio,
        reprehenderit?
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts">
if (process.client) {
  const { tg } = useTelegram();
  onMounted(() => {
    tg.ready();
    tg.expand();
  });
}
</script>

<style scoped>
.slide {
  height: 100vh;
}
</style>
