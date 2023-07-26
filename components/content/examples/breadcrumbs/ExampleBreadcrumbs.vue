<template>
  <UIBreadcrumbs class="justify-center" :items="crumbs" />
</template>

<script setup lang="ts">
  import { Crumbs } from "@/components/UI/Breadcrumbs.vue";

  const crumbs: Crumbs[] = [
    {
      label: "Home",
      click: () => {
        console.log("clicked");
      },
    },
    {
      label: "Sales",
      link: "#",
    },
    {
      label: "Dashboard",
      link: "/examples/dashboard",
      icon: "heroicons:squares-plus",
      disabled: true,
    },
  ];
</script>
