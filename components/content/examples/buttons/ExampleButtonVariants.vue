<template>
  <div class="flex w-full flex-wrap items-center justify-center gap-5">
    <UIButton v-for="v in variants" :variant="v">Button</UIButton>
  </div>
</template>

<script setup lang="ts">
  const variants = ["default", "destructive", "outline", "secondary", "ghost", "link"] as const;
</script>
