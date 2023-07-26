<template>
  <div class="flex items-center justify-center">
    <UIButton variant="outline" @click="open = true">Open Slide</UIButton>

    <UISlideout v-model="open" v-slot="{ close }">
      <div class="h-screen w-[300px] border-r bg-background p-5">
        <UIButton variant="ghost" size="icon-sm" @click="close">
          <span class="sr-only">Close</span>
          <Icon name="fluent:dismiss-24-regular" size="16" />
        </UIButton>
      </div>
    </UISlideout>
  </div>
</template>

<script setup lang="ts">
  const open = ref(false);
</script>
