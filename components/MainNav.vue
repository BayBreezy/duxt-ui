<template>
  <div class="space-y-5">
    <div v-for="(item, i) in navigation" :key="i">
      <div class="space-y-3" v-if="!item.layout">
        <p class="text-sm font-semibold">{{ item.title }}</p>
        <MainNavLink :links="item.children" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { navigation } = useContent();
</script>
