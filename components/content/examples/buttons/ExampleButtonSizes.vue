<template>
  <div class="flex w-full flex-wrap items-center justify-center gap-5">
    <UIButton v-for="s in sizes" :size="s">Button</UIButton>
    <UIButton size="icon"><Icon name="heroicons:home" class="h-5 w-5" /></UIButton>
  </div>
</template>

<script setup lang="ts">
  const sizes = ["sm", "default", "lg"] as const;
</script>
