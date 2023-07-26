<template>
  <div>
    <UIListbox
      label="Select a user"
      icon="heroicons:user"
      multiple
      label-prop="name"
      value-prop="id"
      :options="options"
      return-object
      v-model="selected"
    />
  </div>
</template>

<script setup lang="ts">
  const options = [
    { id: "ATP", name: "Jay Paul", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    {
      id: "5OD",
      name: "Emily Walters",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
    { id: "KPC", name: "Olive Garza", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    {
      id: "714",
      name: "Elnora Kelley",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
    { id: "RBT", name: "George Holt", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    {
      id: "20S",
      name: "Hannah Thompson",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
    { id: "C8G", name: "Sadie May", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    {
      id: "60P",
      name: "Martha Peterson",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
    {
      id: "3H7",
      name: "Charlie Stone",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
    { id: "407", name: "Annie Meyer", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    { id: "597", name: "Roxie Lowe", image: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    {
      id: "069",
      name: "Leonard Carlson",
      image: "https://randomuser.me/api/portraits/med/men/75.jpg",
    },
  ];

  const selected = ref<typeof options>([]);
</script>
