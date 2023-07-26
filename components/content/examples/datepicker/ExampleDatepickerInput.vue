<template>
  <div class="flex flex-col items-center justify-center">
    <UIDatepicker :max-date="new Date()" v-model="date">
      <template #default="{ inputValue, inputEvents }">
        <UIInput
          readonly
          icon="heroicons:calendar"
          placeholder="Select your birthday"
          label="Select your birthday"
          :value="inputValue"
          v-on="inputEvents"
        />
      </template>
    </UIDatepicker>
  </div>
</template>

<script setup lang="ts">
  const date = ref();
</script>
