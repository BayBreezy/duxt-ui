<template>
  <UIRadioGroup v-model="selected" class="space-y-3">
    <UIRadioItem
      #default="{ checked, disabled }"
      v-for="(p, i) in plans"
      :key="i"
      :value="p.title"
      class="cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-ring"
    >
      <div class="flex items-start gap-4">
        <span class="flex shrink-0 items-center justify-center">
          <Icon
            :name="checked ? 'fluent:radio-button-24-filled' : 'fluent:radio-button-24-regular'"
            class="h-5 w-5 transition-colors"
            :class="{
              'text-primary': checked,
              'text-muted-foreground': !checked,
            }"
          />
        </span>
        <div class="flex flex-col">
          <span class="select-none text-sm font-medium leading-none">{{ p.title }}</span>
          <span class="mt-0.5 text-sm text-muted-foreground">{{ p.sub }}</span>
        </div>
      </div>
    </UIRadioItem>
  </UIRadioGroup>
  <div class="mt-5 text-sm text-muted-foreground">
    <span>{{ selected ? `You selected the ${selected} plan.` : "No plan selected yet." }}</span>
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
