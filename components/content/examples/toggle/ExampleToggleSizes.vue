<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <UIToggle
      v-for="s in sizes"
      :key="s"
      label="Remember me"
      description="Save my login details for next time."
      :size="s"
      v-model="model"
    />
  </div>
</template>

<script setup lang="ts">
  const model = ref(false);

  const sizes = ["sm", "md", "lg"] as const;
</script>
