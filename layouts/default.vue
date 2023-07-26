<template>
  <div>
    <!-- Header -->
    <HeaderNav />

    <div class="container gap-7 lg:grid lg:grid-cols-12">
      <!-- Sidebar -->
      <aside
        class="hidden overflow-y-auto border-r pb-8 pt-5 scrollbar scrollbar-thumb-border scrollbar-thumb-rounded-lg scrollbar-w-2 lg:sticky lg:top-[65px] lg:col-span-2 lg:block lg:h-[calc(100vh-65px)]"
      >
        <MainNav />
      </aside>
      <!-- Main content -->
      <main class="lg:col-span-10 lg:grid lg:grid-cols-12 lg:gap-5">
        <div
          class="prose prose-slate max-w-none px-3 dark:prose-invert prose-headings:scroll-mt-20 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-muted lg:px-5"
          :class="[toc && toc.links && toc.links.length ? 'lg:col-span-9' : 'lg:col-span-12']"
        >
          <!-- Show info about the page at the top -->
          <PageIntro />
          <slot />
          <!-- Show next/prev links at the bottom -->
          <NextPrev />
        </div>
        <!-- Table of contents -->
        <div v-if="toc && toc.links && toc.links.length" class="hidden lg:col-span-3 lg:block">
          <div class="sticky top-16 overflow-y-auto pb-8 pt-5 lg:h-[calc(100vh-65px)]">
            <p class="text-sm font-semibold">Table of contents</p>

            <nav class="mt-3 flex flex-col pl-2 text-sm">
              <NuxtLink
                class="p-1.5 text-muted-foreground transition hover:text-primary hover:underline hover:underline-offset-4"
                :to="`#${l.id}`"
                v-for="(l, i) in toc.links"
                :key="i"
              >
                {{ l.text }}
              </NuxtLink>
            </nav>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
  const { toc } = useContent();
</script>
