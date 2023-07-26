<template>
  <div class="flex w-full items-center justify-center">
    <UIDropdown :items="items">
      <UIButton variant="outline">Open dropdown</UIButton>
      <template #header>
        <div class="w-full border-b px-4 py-3">
          <p class="text-sm font-medium">My account</p>
        </div>
      </template>
    </UIDropdown>
  </div>
</template>

<script setup lang="ts">
  const items = [
    {
      label: "Profile",
      icon: "fluent:person-24-regular",
      onClick: () => alert("Profile"),
      shortcut: "Ctrl+Shift+P",
    },
    {
      label: "Billing",
      icon: "fluent:wallet-credit-card-24-regular",
      onClick: () => alert("CRedit card"),
      shortcut: "Ctrl+Shift+C",
    },
    { divider: true },
    {
      label: "Settings",
      icon: "fluent:settings-24-regular",
      onClick: () => alert("Settings"),
      shortcut: "Ctrl+Shift+S",
    },
    {
      label: "Invite users",
      icon: "fluent:person-add-24-regular",
      children: [
        {
          icon: "fluent:mail-24-regular",
          label: "Invite by email",
          onClick: () => alert("Invite by email"),
        },
        {
          icon: "fluent:link-24-regular",
          label: "Invite by link",
          onClick: () => alert("Invite by link"),
        },
        { divider: true },
        {
          label: "More",
          icon: "fluent:more-24-regular",
          children: [
            {
              icon: "logos:facebook",
              label: "Invite by Facebook",
              onClick: () => alert("Invite by Facebook"),
            },
            {
              icon: "logos:google-gmail",
              label: "Invite by Gmail",
              onClick: () => alert("Invite by Gmail"),
            },
          ],
        },
      ],
    },
    { divider: true },
    {
      label: "Logout",
      icon: "fluent:arrow-hook-up-right-24-regular",
      onClick: () => alert("Loggin out..."),
    },
  ];
</script>
