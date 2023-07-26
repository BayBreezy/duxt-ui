<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <UIToggle
      v-for="c in colors"
      :key="c"
      label="Remember me"
      description="Save my login details for next time."
      :color="c"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
  const model = ref(false);

  const colors = ["primary", "success", "error", "warning", "info"] as const;
</script>
