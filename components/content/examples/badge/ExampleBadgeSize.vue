<template>
  <div class="flex items-center justify-center gap-5">
    <UIBadge v-for="s in sizes" :size="s">Hello</UIBadge>
  </div>
</template>

<script setup lang="ts">
  const sizes = ["sm", "md", "lg"] as const;
</script>
