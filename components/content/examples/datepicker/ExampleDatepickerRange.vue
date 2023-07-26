<template>
  <div class="flex flex-col items-center justify-center">
    <p class="mb-2 text-sm">
      {{ useDayjs()(date.start).format("MM/DD/YYYY h:mmA") }} -->
      {{ useDayjs()(date.end).format("MM/DD/YYYY h:mmA") }}
    </p>
    <UIDatepicker mode="dateTime" v-model.range="date" />
  </div>
</template>

<script setup lang="ts">
  const date = ref({
    start: new Date(),
    end: new Date(),
  });
</script>
