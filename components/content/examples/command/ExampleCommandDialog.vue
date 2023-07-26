<template>
  <div class="flex w-full items-center justify-center">
    <UIButton @click="show = true" variant="outline">Press Ctl+Shift+K</UIButton>
    <UIDialog v-model="show">
      <div class="w-[400px]">
        <UICommand @update:model-value="doSomething" :options="people" />
      </div>
    </UIDialog>
  </div>
</template>

<script setup lang="ts">
  const people = [
    { id: 1, title: "Wade Cooper", avatar: "https://randomuser.me/api/portraits/med/men/75.jpg" },
    { id: 2, title: "Arlene Mccoy", icon: "heroicons:user" },
    { id: 3, title: "Devon Webb" },
    {
      label: "Actions",
      children: [
        {
          title: "Add new file",
          icon: "heroicons:document-plus",
          click: () => alert("Creating a new file..."),
          shortcut: "Ctrl+Shift+F",
        },
        { title: "Go to home page", icon: "heroicons:home", to: "/" },
      ],
    },
    { id: 4, title: "Tom Cook" },
  ];

  const show = ref(false);
  const keys = useMagicKeys();
  whenever(keys.control_shift_k, () => {
    show.value = true;
  });

  // Use vueuse or some other method to watch for a key combination
  whenever(
    () => keys.control_shift_f.value && show.value,
    () => {
      console.log("Creating a new file...");
    }
  );

  const doSomething = (item: any) => {
    const router = useRouter();
    if (item.click) item.click();
    else if (item.to) router.push(item.to);
    else if (item.href) window.open(item.href, item.target || "_blank");
  };
</script>
