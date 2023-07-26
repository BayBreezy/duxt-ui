<template>
  <div class="flex flex-col items-center justify-center">
    <p class="mb-2 text-sm">Selected date: {{ useDayjs()(date) }}</p>
    <UIDatepicker v-model="date" />
  </div>
</template>

<script setup lang="ts">
  const date = ref(new Date());
</script>
