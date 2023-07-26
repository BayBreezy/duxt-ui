<template>
  <div>
    <UISlider
      :merge="100"
      :min="10"
      :max="500"
      :step="10"
      show-tooltip="always"
      v-model="val"
      :format="(v: any) => `\$${Math.round(v)}`"
    />
  </div>
</template>

<script setup lang="ts">
  const val = ref([150, 300]);
</script>
