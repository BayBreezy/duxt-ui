<template>
  <UIAccordion :button-style="variants[i]" v-for="(q, i) in questions" :key="q.q" :title="q.q">
    <div class="p-2 sm:text-[15px]" v-html="q.a"></div>
  </UIAccordion>
</template>

<script setup lang="ts">
  const questions = [
    {
      q: "What is NuxtJS?",
      a: "NuxtJS is a VueJS framework that allows you to build server-side rendered (SSR) applications. It is built on top of VueJS and Vue Router. It also provides a lot of other great features like code splitting, static site generation, and more!",
    },
    {
      q: "What is TailwindCSS?",
      a: "TailwindCSS is a utility-first CSS framework that allows you to build custom designs without ever leaving your HTML. It is built on top of PostCSS.",
    },
    {
      q: "What is TypeScript?",
      a: "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. It is built on top of JavaScript.",
    },
  ];

  const variants = ["muted", "outline", "shadcn"] as const;
</script>
