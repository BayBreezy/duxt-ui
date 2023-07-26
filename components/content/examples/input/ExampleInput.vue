<template>
  <div>
    <UIInput
      name="fullName"
      label="Full Name"
      icon="heroicons:user"
      trailing-icon="heroicons:question-mark-circle"
      placeholder="Enter your full name"
      v-model="name"
      hint="This is a hint"
    />
    <p class="mt-5 text-sm font-medium">
      &nbsp;
      <TransitionSlide :offset="[0, -10]">
        <span class="inline-block" v-if="name"> Hello {{ name }} </span>
      </TransitionSlide>
    </p>
  </div>
</template>
<script setup lang="ts">
  const name = ref("");
</script>
