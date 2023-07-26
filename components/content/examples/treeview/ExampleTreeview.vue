<template>
  <div>
    <UITreeview :items="folders" />
  </div>
</template>

<script setup lang="ts">
  const folders = [
    {
      title: ".nuxt",
      icon: "vscode-icons:default-folder",
      openIcon: "vscode-icons:default-folder-opened",
      children: [
        {
          title: "Too much sauce",
          icon: "🔥",
          click: () => alert("🔥"),
        },
      ],
    },
    {
      title: ".vscode",
      icon: "vscode-icons:folder-type-vscode",
      openIcon: "vscode-icons:folder-type-vscode-opened",
      children: [
        {
          title: "extensions.json",
          icon: "vscode-icons:file-type-json",
        },
      ],
    },
    {
      title: "app",
      icon: "vscode-icons:default-folder",
      openIcon: "vscode-icons:default-folder-opened",
      children: [
        {
          title: "router.options.ts",
          icon: "vscode-icons:file-type-typescript-official",
        },
      ],
    },
    {
      title: "pages",
      open: true,
      icon: "vscode-icons:default-folder",
      openIcon: "vscode-icons:default-folder-opened",
      children: [
        {
          title: "index.vue",
          icon: "vscode-icons:file-type-vue",
        },
        {
          title: "about",
          open: true,
          icon: "vscode-icons:default-folder",
          openIcon: "vscode-icons:default-folder-opened",
          children: [
            {
              title: "index.vue",
              icon: "vscode-icons:file-type-vue",
            },
          ],
        },
      ],
    },
    {
      title: "node_modules",
      disabled: true,
      icon: "vscode-icons:default-folder",
    },
    {
      title: "server",
      icon: "vscode-icons:default-folder",
      openIcon: "vscode-icons:default-folder-opened",
      children: [
        {
          title: "Too much sauce",
          icon: "🔥",
          click: () => alert("🔥"),
        },
      ],
    },
    {
      title: ".gitignore",
      icon: "vscode-icons:file-type-git",
    },
    {
      title: ".npmrc",
      icon: "vscode-icons:file-type-npm",
    },
    {
      title: ".prettierrc",
      icon: "vscode-icons:file-type-light-prettier",
    },
    {
      title: "app.vue",
      icon: "vscode-icons:file-type-vue",
    },
    {
      title: "nuxt.config.ts",
      icon: "vscode-icons:file-type-nuxt",
    },
    {
      title: "package.json",
      icon: "vscode-icons:file-type-node",
    },
    {
      title: "tailwind.config.ts",
      icon: "vscode-icons:file-type-tailwind",
    },
    {
      title: "tsconfig.json",
      icon: "vscode-icons:file-type-tsconfig",
    },
    {
      title: "yarn.lock",
      icon: "vscode-icons:file-type-yarn",
    },
  ];
</script>
