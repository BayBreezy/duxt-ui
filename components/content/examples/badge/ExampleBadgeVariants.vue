<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <UIBadge to="/" v-for="v in variants" :variant="v">Hello</UIBadge>
  </div>
</template>

<script setup lang="ts">
  const variants = [
    "primary",
    "primary-outline",
    "muted",
    "muted-outline",
    "destructive",
    "destructive-outline",
  ] as const;
</script>
