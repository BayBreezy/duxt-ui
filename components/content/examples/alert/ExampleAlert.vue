<template>
  <div class="flex items-center justify-center">
    <UIAlert
      v-model:shown="show"
      dismissible
      icon="fluent:code-24-regular"
      title="Heads up!"
      message="You can add components to your app using the cli."
    ></UIAlert>
    <UIButton variant="outline" v-if="!show" @click="show = true">Reset</UIButton>
  </div>
</template>

<script setup lang="ts">
  const show = ref(true);
</script>
