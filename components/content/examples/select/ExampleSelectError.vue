<template>
  <div>
    <UISelect
      error-message="Error: A constant error 🎈"
      value-prop="id"
      label-prop="name"
      :options="options"
      label="Select a user"
      placeholder="Select a user"
    />
  </div>
</template>

<script setup lang="ts">
  const options = [
    { id: "ATP", name: "Jay Paul" },
    { id: "5OD", name: "Emily Walters" },
    { id: "KPC", name: "Olive Garza" },
    { id: "714", name: "Elnora Kelley" },
    { id: "RBT", name: "George Holt" },
    { id: "20S", name: "Hannah Thompson" },
    { id: "C8G", name: "Sadie May" },
    { id: "60P", name: "Martha Peterson" },
    { id: "3H7", name: "Charlie Stone" },
    { id: "407", name: "Annie Meyer" },
    { id: "597", name: "Roxie Lowe" },
    { id: "069", name: "Leonard Carlson" },
  ];
</script>
