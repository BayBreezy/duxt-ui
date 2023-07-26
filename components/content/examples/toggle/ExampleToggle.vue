<template>
  <div class="itemce' flex justify-center">
    <UIToggle label="Airplane Mode" v-model="mode" />
  </div>
</template>

<script setup lang="ts">
  const mode = ref(false);
</script>
