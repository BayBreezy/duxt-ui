<template>
  <div>
    <UIListbox
      label="Select a user"
      multiple
      label-prop="name"
      value-prop="id"
      :options="options"
      return-object
      v-model="selected"
    >
      <template #selected>
        <template v-if="selected.length === 0">Select a user</template>
        <template v-else-if="selected.length <= 4">
          <div class="flex items-center gap-2">
            <UIAvatar size="sm" :src="user.image" v-for="user in selected" :key="user.id" />
          </div>
        </template>
        <template v-else>
          <div class="flex items-center gap-2">
            <UIAvatar
              size="sm"
              :src="user.image"
              v-for="user in selected.slice(0, 4)"
              :key="user.id"
            />
            <span class="text-sm text-muted-foreground/70">+{{ selected.length - 4 }}</span>
          </div>
        </template>
      </template>
      <template #option="{ active, selected: is, option }">
        <li
          :class="[active && 'bg-muted', is && 'bg-primary font-semibold text-primary-foreground']"
          class="flex w-full cursor-pointer items-center gap-2 px-2 py-1.5 text-sm"
        >
          <UIAvatar size="sm" :src="option.image" />
          <span>{{ option.name }}</span>
        </li>
      </template>
    </UIListbox>
  </div>
</template>

<script setup lang="ts">
  const options = [
    { id: "ATP", name: "Jay Paul", image: "https://randomuser.me/api/portraits/med/men/55.jpg" },
    {
      id: "5OD",
      name: "Emily Walters",
      image: "https://randomuser.me/api/portraits/med/women/75.jpg",
    },
    {
      id: "KPC",
      name: "Olive Garza",
      image: "https://randomuser.me/api/portraits/med/women/15.jpg",
    },
    {
      id: "714",
      name: "Elnora Kelley",
      image: "https://randomuser.me/api/portraits/med/women/38.jpg",
    },
    { id: "RBT", name: "George Holt", image: "https://randomuser.me/api/portraits/med/men/5.jpg" },
    {
      id: "20S",
      name: "Hannah Thompson",
      image: "https://randomuser.me/api/portraits/med/women/45.jpg",
    },
    { id: "C8G", name: "Sadie May", image: "https://randomuser.me/api/portraits/med/women/20.jpg" },
    {
      id: "60P",
      name: "Martha Peterson",
      image: "https://randomuser.me/api/portraits/med/women/18.jpg",
    },
    {
      id: "3H7",
      name: "Charlie Stone",
      image: "https://randomuser.me/api/portraits/med/men/18.jpg",
    },
    {
      id: "407",
      name: "Annie Meyer",
      image: "https://randomuser.me/api/portraits/med/women/95.jpg",
    },
    {
      id: "597",
      name: "Roxie Lowe",
      image: "https://randomuser.me/api/portraits/med/women/88.jpg",
    },
    {
      id: "069",
      name: "Leonard Carlson",
      image: "https://randomuser.me/api/portraits/med/men/2.jpg",
    },
  ];

  const selected = ref([]) as Ref<any[]>;
</script>
