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
      <SwiperSlide class="h-sm bg-coolgray">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid
        dignissimos dolores error est impedit ipsa iusto, magni perspiciatis
        quae! Porro.
      </SwiperSlide>
      <SwiperSlide class="h-sm bg-blue">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aperiam
        eligendi explicabo nisi officia quos temporibus veritatis. Aliquam,
        quod, rerum.
      </SwiperSlide>
      <SwiperSlide class="h-sm bg-red">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam
        dolore esse exercitationem magni quas quasi suscipit. Aut, odio,
        reprehenderit?
      </SwiperSlide>
    </Swiper>
  </div>
</template>
<script setup lang="ts"></script>
