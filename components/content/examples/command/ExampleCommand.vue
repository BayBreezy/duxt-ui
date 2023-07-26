<template>
  <div class="flex w-full items-center justify-center">
    <UICommand @update:model-value="doSomething" :options="people" />
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
        },
        { title: "Delete a customers", icon: "heroicons:trash", to: "/" },
      ],
    },
    { id: 4, title: "Tom Cook" },
  ];

  const doSomething = (item: any) => {
    const router = useRouter();
    if (item.click) item.click();
    else if (item.to) router.push(item.to);
    else if (item.href) window.open(item.href, item.target || "_blank");
  };
</script>
