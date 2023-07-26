<template>
  <div>
    <UITextarea
      label="Bio"
      icon="heroicons:pencil"
      trailing-icon="heroicons:question-mark-circle"
      placeholder="Tell us about yourself..."
      v-model="name"
      hint="This is a hint"
    />
    <p class="mt-3 whitespace-pre-line text-sm" v-if="name">{{ name }}</p>
  </div>
</template>
<script setup lang="ts">
  const name = ref("");
</script>
