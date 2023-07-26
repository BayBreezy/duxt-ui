<template>
  <UISlideout v-model="isOpen">
    <div class="h-[100dvh] w-[300px] overflow-y-auto border-r px-5 py-5">
      <MainNav />
    </div>
  </UISlideout>
</template>

<script setup lang="ts">
  defineOptions({ inheritAttrs: false });
  const props = defineProps<{
    modelValue?: boolean;
  }>();

  const emits = defineEmits<{
    "update:modelValue": [boolean];
  }>();

  const isOpen = computed<boolean>({
    get() {
      return props.modelValue ?? false;
    },
    set(value) {
      emits("update:modelValue", value);
    },
  });
</script>
