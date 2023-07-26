<template>
  <div class="flex w-full items-center justify-center">
    <div
      @contextmenu.prevent="show = true"
      class="flex h-[200px] min-w-[300px] select-none items-center justify-center rounded-md bg-muted"
    >
      <p>Right click here</p>
    </div>
    <UIContextMenu :items="items" v-model="show" />
  </div>
</template>

<script setup lang="ts">
  import { type MenuItem } from "@imengyu/vue3-context-menu";

  const show = ref(false);
  const { x, y } = useMouse();

  const items: MenuItem[] = [
    { label: "Go back", shortcut: "⌘ [", onClick: () => alert("Go back") },
    { label: "Forward", shortcut: "⌘ ]", onClick: () => alert("Forward"), divided: true },
    { label: "Reload", shortcut: "⌘ R", onClick: () => alert("Reload") },
    {
      label: "More Tools",
      divided: true,
      children: [
        {
          label: "AI Tools",
          shortcut: "⌘ A I",
          onClick: () => alert("Opening AI tools"),
          divided: true,
        },
        {
          label: "Screen Recorder",
          shortcut: "⌘ S R",
          onClick: () => alert("Opening Screen Recorder"),
        },
        { label: "Snippet", shortcut: "⌘ Shft 5", onClick: () => alert("Capturing screen") },
      ],
    },
    {
      label: "Show Bookmarks Bar",
      shortcut: "⌘ Shft B",
      icon: "heroicons:bookmark",
      onClick: () => alert("Show Bookmarks Bar"),
    },
    { label: "Show Full URLs", icon: "heroicons:link", onClick: () => alert("Show Full URLs") },
    {
      label: "Download Page",
      shortcut: "⌘ D",
      icon: "heroicons:arrow-down-tray",
      onClick: () => alert("Download Page"),
    },
  ];
</script>
