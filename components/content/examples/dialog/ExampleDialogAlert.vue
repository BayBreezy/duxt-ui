<template>
  <UIButton class="mx-auto block" @click="show = true" variant="outline">View Stats</UIButton>
  <UIDialog v-model="show" force-close>
    <div
      class="relative min-w-[400px] rounded-lg bg-background shadow-lg ring-1 ring-muted dark:ring-gray-800/50"
    >
      <div class="absolute right-3 top-3">
        <UIButton
          @click="show = false"
          class="opacity-50 hover:opacity-100"
          size="icon"
          variant="ghost"
        >
          <Icon name="heroicons:x-mark" size="16" />
        </UIButton>
      </div>
      <div class="p-5">
        <p class="font-semibold">Weekend report</p>
        <small class="text-muted-foreground">A run down of what happened while you were gone</small>
      </div>
      <div class="px-5 pb-5">
        <UISkeleton class="h-32 w-full rounded bg-input" />
      </div>
    </div>
  </UIDialog>
</template>

<script setup lang="ts">
  const show = ref(false);
</script>
