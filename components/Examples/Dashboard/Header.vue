<template>
  <div>
    <header class="flex h-16 items-center justify-between border-b px-4">
      <div class="flex items-center">
        <UIPopover :close-delay="100" ref="teamPicker" placement="bottom-start">
          <UIButton size="sm" variant="outline" class="w-[200px] justify-between">
            <span v-if="!selectedTeam">Select Team</span>
            <div v-else class="flex items-center gap-2">
              <UIAvatar :src="selectedTeam.avatar" class="h-5 w-5" /> {{ selectedTeam.title }}
            </div>
            <Icon class="ml-auto h-5 w-5 text-muted-foreground" name="heroicons:chevron-up-down"
          /></UIButton>
          <template #content="{ close }">
            <UICommand
              @update:model-value="doSomething"
              placeholder="Search team..."
              :options="options"
            />
          </template>
        </UIPopover>

        <nav class="mx-6 flex items-center space-x-4 lg:space-x-6">
          <template v-for="(l, i) in ['Overview', 'Customers', 'Products', 'Settings']">
            <NuxtLink
              class="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              to="#"
              >{{ l }}</NuxtLink
            >
          </template>
        </nav>
      </div>

      <div class="flex items-center gap-4">
        <UIInput type="search" class="h-9 md:w-[100px] lg:w-[300px]" />

        <UIDropdown hover width="w-[200px]" :items="menu" placement="bottom-end">
          <template #header>
            <div class="border-b px-3 py-2.5 text-sm">
              <p class="font-medium leading-none">shadcn</p>
              <p class="text-xs text-muted-foreground">m@example.com</p>
            </div>
          </template>
          <UIAvatar
            class="h-8 w-8 cursor-pointer"
            src="https://randomuser.me/api/portraits/med/women/10.jpg"
          />
        </UIDropdown>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
  const teamPicker = ref();
  const options = [
    {
      label: "Personal Account",
      divider: "border-b",
      children: [
        {
          title: "Alicia Koch",
          avatar: "https://randomuser.me/api/portraits/med/women/20.jpg",
        },
      ],
    },
    {
      label: "Teams",
      divider: "border-b",
      children: [
        {
          title: "Acme Inc.",
          avatar: "https://avatar.vercel.sh/acme",
        },
        {
          title: "Monster Inc.",
          avatar: "https://avatar.vercel.sh/monster",
        },
      ],
    },
    {
      title: "Create Team",
      icon: "heroicons:plus-circle",
      click: () => alert("Create Team"),
    },
  ];

  const menu = [
    {
      label: "Profile",
      shortcut: "⌘P",
      click: () => alert("Profile"),
    },
    {
      label: "Billing",
      shortcut: "⌘B",
      click: () => alert("Billing"),
    },
    {
      label: "Settings",
      shortcut: "⌘B",
      click: () => alert("Settings"),
    },
    {
      label: "New Team",
      click: () => alert("New team"),
    },
    { divider: true },
    {
      label: "Logout",
      shortcut: "⌘Q",
      click: () => alert("Logging out"),
    },
  ];

  const selectedTeam = ref();
  const doSomething = (item: any) => {
    if (item.click) item.click();
    else if (item.title) selectedTeam.value = item;
    teamPicker.value.close();
  };
</script>
