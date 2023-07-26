<template>
  <div class="flex flex-wrap items-center justify-center gap-5 gap-y-7">
    <UICheckbox v-for="c in types" :key="c" :type="c" :label="useCapitalize(c)" />
  </div>
</template>

<script setup lang="ts">
  const types = ["primary", "success", "error", "warning", "info", "muted"] as const;
</script>
