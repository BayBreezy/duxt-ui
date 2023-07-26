<template>
  <div>
    <UISelect
      icon="heroicons:user"
      value-prop="id"
      label-prop="name"
      :options="options"
      return-object
      v-model="selected"
      label="Select a user"
      placeholder="Select a user"
    />
    <p class="mt-5 text-sm">Selected user: {{ selected }}</p>
  </div>
</template>

<script setup lang="ts">
  const options = [
    "Leonard Burton",
    "Michael Singleton",
    "Marvin Delgado",
    "Catherine Houston",
    "Owen Jenkins",
    "Willie Stone",
    "Duane Patton",
    "Mario Phillips",
    "Clayton Pena",
    "Bessie Gordon",
    "Catherine Cohen",
    "Edgar Brown",
  ];

  const selected = ref(options[3]);
</script>
