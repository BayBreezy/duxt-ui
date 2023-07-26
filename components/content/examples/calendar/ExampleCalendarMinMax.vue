<template>
  <div class="flex items-center justify-center">
    <UICalendar :min-date="min" :max-date="max" />
  </div>
</template>

<script setup lang="ts">
  const min = useDayjs()().subtract(5, "day").toDate();
  const max = useDayjs()().add(5, "day").toDate();
</script>
