<template>
  <UIRadioGroup v-model="selected" class="space-y-2">
    <UIRadioItem
      #default="{ active, checked }"
      v-for="(p, i) in plans"
      :key="i"
      :value="p"
      class="relative flex cursor-pointer items-center justify-between rounded-md border p-2 px-4 transition focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
    >
      <TransitionScale>
        <span v-if="checked" class="absolute -right-2 -top-2 flex items-center justify-center">
          <Icon class="text-sky-500" name="heroicons:check-badge-solid" size="26" />
        </span>
      </TransitionScale>
      <div>
        <p class="font-medium">{{ p.title }}</p>
        <p class="mt-1 text-sm text-muted-foreground">{{ p.sub }}</p>
      </div>
      <div>
        <p class="text-sm font-semibold text-sky-500">{{ p.cost }}</p>
      </div>
    </UIRadioItem>
  </UIRadioGroup>
  <div class="mt-2 text-sm text-muted-foreground">
    You selected:
    <pre>{{ selected }}</pre>
  </div>
</template>

<script setup>
  const plans = [
    { title: "Free", sub: "Get a free plan today", cost: "$0" },
    { title: "Basic", sub: "Get a basic plan today", cost: "$10" },
    { title: "Premium", sub: "Get a premium plan today", cost: "$20" },
  ];

  const selected = ref();
</script>
