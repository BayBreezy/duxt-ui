<template>
  <div>
    <UIMultiSelect formLabel="Hero" groups placeholder="Select a hero" :options="options" />
  </div>
</template>

<script setup lang="ts">
  const options = [
    {
      label: "DC",
      options: ["Batman", "Robin", "Joker"],
    },
    {
      label: "Marvel",
      options: ["Spiderman", "Iron Man", "Captain America"],
    },
  ];
</script>
