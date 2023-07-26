<template>
  <div class="flex flex-wrap items-center justify-center gap-5">
    <UIButton variant="outline" @click="top = true">Open Top</UIButton>
    <UIButton variant="outline" @click="bottom = true">Open Bottom</UIButton>
    <UIButton variant="outline" @click="left = true">Open Left</UIButton>
    <UIButton variant="outline" @click="right = true">Open Right</UIButton>

    <!-- Top -->
    <UISlideout v-slot="{ close }" side="top" v-model="top">
      <div class="h-[300px] w-screen border-b bg-background p-5">
        <UIButton variant="ghost" size="icon-sm" @click="close">
          <span class="sr-only">Close</span>
          <Icon name="fluent:dismiss-24-regular" size="16" />
        </UIButton>
      </div>
    </UISlideout>

    <!-- Bottom -->
    <UISlideout v-slot="{ close }" side="bottom" v-model="bottom">
      <div class="h-[300px] w-screen border-t bg-background p-5">
        <UIButton variant="ghost" size="icon-sm" @click="close">
          <span class="sr-only">Close</span>
          <Icon name="fluent:dismiss-24-regular" size="16" />
        </UIButton>
      </div>
    </UISlideout>

    <!-- Left -->
    <UISlideout side="left" v-slot="{ close }" v-model="left">
      <div class="h-screen w-[300px] border-r bg-background p-5">
        <UIButton variant="ghost" size="icon-sm" @click="close">
          <span class="sr-only">Close</span>
          <Icon name="fluent:dismiss-24-regular" size="16" />
        </UIButton>
      </div>
    </UISlideout>

    <!-- Right -->
    <UISlideout side="right" v-slot="{ close }" v-model="right">
      <div class="h-screen w-[300px] border-l bg-background p-5">
        <UIButton variant="ghost" size="icon-sm" @click="close">
          <span class="sr-only">Close</span>
          <Icon name="fluent:dismiss-24-regular" size="16" />
        </UIButton>
      </div>
    </UISlideout>
  </div>
</template>

<script setup lang="ts">
  const top = ref(false);
  const bottom = ref(false);
  const left = ref(false);
  const right = ref(false);
</script>
