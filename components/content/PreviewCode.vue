<template>
  <UITabs class="mb-3 mt-5">
    <template #tab>
      <div class="flex items-center">
        <UITab>Preview</UITab>
        <UITab v-if="$slots?.code">Code</UITab>
      </div>
    </template>
    <template #content>
      <UITabContent
        class="mt-3 flex min-h-[300px] items-center justify-center rounded-md border p-5 lg:p-10"
      >
        <div class="not-prose w-full">
          <component :is="preview"></component>
        </div>
      </UITabContent>
      <UITabContent v-if="$slots?.code" class="mt-3 rounded-md">
        <ContentSlot v-if="$slots?.code" :use="$slots.code" unwrap="p" />
      </UITabContent>
    </template>
  </UITabs>
</template>

<script setup lang="ts">
  defineProps<{
    preview?: string;
  }>();
</script>
