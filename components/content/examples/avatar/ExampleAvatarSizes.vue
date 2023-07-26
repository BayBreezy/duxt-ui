<template>
  <div class="space-y-5">
    <div class="flex flex-wrap items-center justify-center gap-5">
      <UIAvatar v-for="s in sizes" :size="s" src="https://randomuser.me/api/portraits/men/15.jpg" />
    </div>
    <div class="flex flex-wrap items-center justify-center gap-5">
      <UIAvatar shape="square" v-for="s in sizes" :size="s" icon="fluent:person-24-filled" />
    </div>
  </div>
</template>

<script setup lang="ts">
  const sizes = ["xs", "sm", "md", "lg", "xl", "2xl"] as const;
</script>
