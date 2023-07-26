<template>
  <div>
    <UIInput icon="heroicons:magnifying-glass" placeholder="Search..." v-model="search" />
    <ClientOnly>
      <UITable
        class="mt-5 rounded-md border"
        v-model="selected"
        :search="search"
        :data="users"
        :columns="columns"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
  import { type ColumnDef } from "@tanstack/vue-table";

  const columns: ColumnDef<any>[] = [
    { accessorKey: "id", header: "ID", accessorFn: (d) => d.id.value?.substring(0, 5) || "NA" },
    { accessorKey: "name", header: "Name", accessorFn: (d) => `${d.name.first} ${d.name.last}` },
    { accessorKey: "email", header: "Email" },
    {
      accessorKey: "edit",
      header: " ",
      cell: ({ row }) => {
        return h(
          resolveComponent("UIButton"),
          {
            variant: "outline",
            size: "icon-sm",
            class: "w-7 h-7",
            onClick: () => console.log(row.original),
          },
          () => [h(resolveComponent("Icon"), { name: "heroicons:pencil" })]
        );
      },
      enableSorting: false,
    },
  ];

  const { data: users } = await useAsyncData<any>(
    "randomusers",
    () => $fetch<any>("https://randomuser.me/api/?results=50"),
    {
      transform: (data: any) => data.results,
    }
  );

  const selected = ref<any[]>([]);
  const search = ref("");
</script>
