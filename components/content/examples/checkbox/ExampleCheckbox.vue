<template>
  <div class="flex flex-col items-center justify-center">
    <UICheckbox
      v-model="remember"
      label="Remember me"
      description="Save my login details for next time."
    />
    <div class="mt-5">
      <TransitionSlide>
        <span class="inline-block" v-if="remember">We will remember 😊</span>
      </TransitionSlide>
    </div>
  </div>
</template>

<script setup lang="ts">
  const remember = ref(false);
</script>
