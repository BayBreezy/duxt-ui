<template>
  <div>
    <UIListbox label="Select a user" :options="options2" v-model="selected" />
  </div>
</template>

<script setup lang="ts">
  const options2 = [
    "Jay Paul",
    "Emily Walters",
    "Olive Garza",
    "Elnora Kelley",
    "George Holt",
    "Hannah Thompson",
    "Sadie May",
    "Martha Peterson",
    "Charlie Stone",
    "Annie Meyer",
    "Roxie Lowe",
    "Leonard Carlson",
  ];

  const selected = ref<typeof options2>();
</script>
