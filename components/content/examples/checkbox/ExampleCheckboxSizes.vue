<template>
  <div class="flex flex-wrap items-center justify-center gap-5 gap-y-7">
    <UICheckbox v-for="c in sizes" :key="c" name="sizesCb" :size="c" label="Remember me" />
  </div>
</template>

<script setup lang="ts">
  const sizes = ["sm", "md", "lg"] as const;
</script>
