<template>
  <!-- Mobile drawer -->
  <MobileDrawer v-model="isOpen" />
  <header class="sticky top-0 z-20 border-b bg-background/80 backdrop-blur">
    <div class="container flex h-16 items-center justify-between">
      <div class="flex items-center gap-3">
        <!-- Button used to show menu on mobile -->
        <button
          @click="isOpen = true"
          class="flex h-9 w-9 items-center justify-center rounded-full border bg-background lg:hidden"
        >
          <Icon name="heroicons:bars-2" class="h-5 w-5" />
        </button>
        <NuxtLink class="flex items-center gap-2 text-xl font-bold text-primary" to="/"
          ><img src="/icon.png" class="hidden h-6 w-6 rounded object-contain lg:block" /> Duxt
          UI</NuxtLink
        >
      </div>
      <!-- Button used to switch color mode -->
      <div class="felx items-center">
        <UIButton @click="toggleTheme()" variant="ghost" size="icon-sm">
          <Icon name="heroicons:sun" class="h-5 w-5" />
        </UIButton>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
  // Color mode
  const mode = useColorMode();
  // Toggle color mode
  const toggleTheme = () => {
    mode.value = mode.value === "light" ? "dark" : "light";
  };
  // Mobile drawer state
  const isOpen = ref(false);
</script>
