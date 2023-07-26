<template>
  <div>
    <UIInput
      label="Email"
      icon="heroicons:envelope"
      v-model="email"
      error-message="Invalid data entered"
    />
    <p class="mt-5 text-sm font-medium">
      &nbsp;
      <TransitionSlide :offset="[0, -10]">
        <span class="inline-block" v-if="email"> Email willl be sent to: {{ email }} </span>
      </TransitionSlide>
    </p>
  </div>
</template>
<script setup lang="ts">
  const email = ref("");
</script>
