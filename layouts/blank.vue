<template>
  <div>
    <!-- Header -->
    <HeaderNav />
    <div class="container prose prose-slate max-w-5xl dark:prose-invert">
      <!-- Show info about the page at the top -->
      <PageIntro />
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts"></script>
